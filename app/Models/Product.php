<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{

    public function getProductAll()
    {
        $result = DB::table('products')->get();
        return $result;
    }
    public function getProductType($request)
    {
        $result = DB::table('products')->join('inforproduct', 'products.id', '=', 'inforproduct.idProduct')->where('products.type', '=', $request->typeProduct)->get(['products.*', 'inforproduct.sale']);
        return $result;
    }
    public function getInformation($request)
    {
        $result = DB::table('inforproduct')->join('products', 'inforproduct.idProduct', '=', 'products.id')->where('inforproduct.idProduct', '=', $request->id)->first(['inforproduct.*', 'products.image', 'products.currentPrice', 'products.price']);
        return $result;
    }
    public function getCart()
    {
        $result = DB::table('cart')->get();
        return $result;
    }
    public function addCart($request)
    {
        $result = DB::table('cart')->insert([
            'idProduct' => $request->id,
            'sumPrice' => $request->sumPrice,
            'quantity' => $request->quantity
        ]);
        return $result;
    }
    public function checkCart($request)
    {
        $result = DB::table('cart')->where('idProduct', '=', $request->id)->first();
        return $result;
    }
    public function deleteCart($request)
    {
        $result = DB::table('cart')->where('idProduct', '=', $request->id)->delete();
        // $result->delete();
        return $result;
    }
    public function updateCart($request)
    {
        $result = DB::table('cart')->where('idProduct', '=', $request->id)->update(['quantity' => $request->quantity + 1]);
        return $result;
    }
    public function addProduct($request)
    {
        $result =  DB::table('products')->insert([
            'name' => $request->name,
            'price' => $request->price,
            'currentPrice' => $request->currentPrice,
            'type' => $request->type,
            'image' => $request->image
        ]);
        $id = DB::getPdo()->lastInsertId();
        if (!empty($id)) {
            DB::table('inforproduct')->insert([
                'idProduct' => $id,
                'name' => $request->name,
                'inventoryNumber' => $request->inventoryNumber,
                'quantitySold' => $request->quantitySold,
                'description' => $request->description,
                'sale' => $request->sale,
            ]);
        }
        return $result;
    }
}