<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;

class homeController extends Controller
{
    public function __construct()
    {
        $this->db = new Product();
    }
    public function getPost()
    {
        return view('index');
    }
    public function getProductAll()
    {
        $result = $this->db->getProductAll();
        return $result;
    }
    public function getProductType(Request $request)
    {
        $result = $this->db->getProductType($request);
        return $result;
    }
    public function getInformation(Request $request)
    {
        $result = $this->db->getInformation($request);
        return $result;
    }
    public function getCart(Request $request)
    {
        $result = $this->db->getCart($request);
        return $result;
    }
    public function addCart(Request $request)
    {
        $result = $this->db->addCart($request);
        return $result;
    }
    public function checkCart(Request $request)
    {
        $result = $this->db->checkCart($request);
        return $result;
    }
    public function deleteCart(Request $request)
    {
        $result = $this->db->deleteCart($request);
        return $result;
    }
    public function updateCart(Request $request)
    {
        $result = $this->db->updateCart($request);
        return $result;
    }
    public function addProduct(Request $request)
    {

        $result = $this->db->addProduct($request);
        return $result;
    }
    public function slide()
    {
        $r = '../../../public/assets/clients/images/image.jpg';
        return $r;
    }
}