require 'test_helper'

class RestosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get restos_index_url
    assert_response :success
  end

  test "should get show" do
    get restos_show_url
    assert_response :success
  end

  test "should get new" do
    get restos_new_url
    assert_response :success
  end

  test "should get create" do
    get restos_create_url
    assert_response :success
  end

  test "should get edit" do
    get restos_edit_url
    assert_response :success
  end

  test "should get update" do
    get restos_update_url
    assert_response :success
  end

  test "should get destroy" do
    get restos_destroy_url
    assert_response :success
  end

end
