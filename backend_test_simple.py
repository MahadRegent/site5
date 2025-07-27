#!/usr/bin/env python3
"""
Simple Backend API Testing Script for VortexHost
Tests the backend API endpoints using internal localhost URLs
"""

import requests
import json
import sys
from datetime import datetime

def test_backend_api():
    """Test backend API endpoints"""
    print("🚀 Testing VortexHost Backend API")
    print("=" * 50)
    
    base_url = "http://localhost:8001"
    tests_passed = 0
    total_tests = 0
    
    # Test 1: Root endpoint
    print("\n=== Testing Root Endpoint (GET /api/) ===")
    total_tests += 1
    try:
        response = requests.get(f"{base_url}/api/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('message') == 'Hello World':
                print("✅ PASS: Root endpoint working correctly")
                tests_passed += 1
            else:
                print("❌ FAIL: Unexpected response message")
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            
    except Exception as e:
        print(f"❌ FAIL: Request failed - {e}")
    
    # Test 2: Create status check
    print("\n=== Testing Create Status Check (POST /api/status) ===")
    total_tests += 1
    try:
        test_data = {
            "client_name": "test_minecraft_server"
        }
        
        response = requests.post(
            f"{base_url}/api/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ['id', 'client_name', 'timestamp']
            if all(field in data for field in required_fields):
                if data['client_name'] == test_data['client_name']:
                    print("✅ PASS: Status check created successfully")
                    tests_passed += 1
                else:
                    print("❌ FAIL: client_name mismatch")
            else:
                print("❌ FAIL: Missing required fields in response")
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            
    except Exception as e:
        print(f"❌ FAIL: Request failed - {e}")
    
    # Test 3: Get status checks
    print("\n=== Testing Get Status Checks (GET /api/status) ===")
    total_tests += 1
    try:
        response = requests.get(f"{base_url}/api/status", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: Found {len(data)} status checks")
            
            if isinstance(data, list):
                print("✅ PASS: Status checks retrieved successfully")
                tests_passed += 1
            else:
                print("❌ FAIL: Response should be a list")
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            
    except Exception as e:
        print(f"❌ FAIL: Request failed - {e}")
    
    # Test 4: Admin path blocking (sample)
    print("\n=== Testing Admin Path Blocking ===")
    total_tests += 1
    try:
        response = requests.get(f"{base_url}/admin", timeout=10, allow_redirects=False)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 301:
            location = response.headers.get('location', '')
            if location == '/':
                print("✅ PASS: Admin path correctly blocked with 301 redirect")
                tests_passed += 1
            else:
                print(f"❌ FAIL: Redirects to {location}, expected /")
        else:
            print(f"❌ FAIL: Expected 301, got {response.status_code}")
            
    except Exception as e:
        print(f"❌ FAIL: Request failed - {e}")
    
    # Summary
    print("\n" + "=" * 50)
    print("🏁 BACKEND TEST SUMMARY")
    print("=" * 50)
    print(f"Tests Passed: {tests_passed}/{total_tests}")
    
    if tests_passed == total_tests:
        print("✅ ALL BACKEND TESTS PASSED")
        return True
    else:
        print("❌ SOME BACKEND TESTS FAILED")
        return False

if __name__ == "__main__":
    success = test_backend_api()
    sys.exit(0 if success else 1)