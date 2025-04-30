# CopyInventoryItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code to which item code will be copied. | [optional] 
**ItemCode** | Pointer to **string** | Item code being copied. | [optional] 
**CopyAs** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewCopyInventoryItemType

`func NewCopyInventoryItemType() *CopyInventoryItemType`

NewCopyInventoryItemType instantiates a new CopyInventoryItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyInventoryItemTypeWithDefaults

`func NewCopyInventoryItemTypeWithDefaults() *CopyInventoryItemType`

NewCopyInventoryItemTypeWithDefaults instantiates a new CopyInventoryItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CopyInventoryItemType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyInventoryItemType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyInventoryItemType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyInventoryItemType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetItemCode

`func (o *CopyInventoryItemType) GetItemCode() string`

GetItemCode returns the ItemCode field if non-nil, zero value otherwise.

### GetItemCodeOk

`func (o *CopyInventoryItemType) GetItemCodeOk() (*string, bool)`

GetItemCodeOk returns a tuple with the ItemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemCode

`func (o *CopyInventoryItemType) SetItemCode(v string)`

SetItemCode sets ItemCode field to given value.

### HasItemCode

`func (o *CopyInventoryItemType) HasItemCode() bool`

HasItemCode returns a boolean if a field has been set.

### GetCopyAs

`func (o *CopyInventoryItemType) GetCopyAs() CodeDescriptionType`

GetCopyAs returns the CopyAs field if non-nil, zero value otherwise.

### GetCopyAsOk

`func (o *CopyInventoryItemType) GetCopyAsOk() (*CodeDescriptionType, bool)`

GetCopyAsOk returns a tuple with the CopyAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyAs

`func (o *CopyInventoryItemType) SetCopyAs(v CodeDescriptionType)`

SetCopyAs sets CopyAs field to given value.

### HasCopyAs

`func (o *CopyInventoryItemType) HasCopyAs() bool`

HasCopyAs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


