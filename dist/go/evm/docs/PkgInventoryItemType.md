# PkgInventoryItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArticleNumber** | Pointer to **string** | Article Number of the inventory item. | [optional] 
**Description** | Pointer to **string** | Description of the inventory item. | [optional] 
**Quantity** | Pointer to **int32** | Quantity of the inventory item allocated to the package. | [optional] 
**ItemId** | Pointer to **int32** | Identifier for the inventory item. | [optional] 

## Methods

### NewPkgInventoryItemType

`func NewPkgInventoryItemType() *PkgInventoryItemType`

NewPkgInventoryItemType instantiates a new PkgInventoryItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPkgInventoryItemTypeWithDefaults

`func NewPkgInventoryItemTypeWithDefaults() *PkgInventoryItemType`

NewPkgInventoryItemTypeWithDefaults instantiates a new PkgInventoryItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArticleNumber

`func (o *PkgInventoryItemType) GetArticleNumber() string`

GetArticleNumber returns the ArticleNumber field if non-nil, zero value otherwise.

### GetArticleNumberOk

`func (o *PkgInventoryItemType) GetArticleNumberOk() (*string, bool)`

GetArticleNumberOk returns a tuple with the ArticleNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticleNumber

`func (o *PkgInventoryItemType) SetArticleNumber(v string)`

SetArticleNumber sets ArticleNumber field to given value.

### HasArticleNumber

`func (o *PkgInventoryItemType) HasArticleNumber() bool`

HasArticleNumber returns a boolean if a field has been set.

### GetDescription

`func (o *PkgInventoryItemType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PkgInventoryItemType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PkgInventoryItemType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PkgInventoryItemType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetQuantity

`func (o *PkgInventoryItemType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *PkgInventoryItemType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *PkgInventoryItemType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *PkgInventoryItemType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetItemId

`func (o *PkgInventoryItemType) GetItemId() int32`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *PkgInventoryItemType) GetItemIdOk() (*int32, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *PkgInventoryItemType) SetItemId(v int32)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *PkgInventoryItemType) HasItemId() bool`

HasItemId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


