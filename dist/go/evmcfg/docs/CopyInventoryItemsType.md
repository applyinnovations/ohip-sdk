# CopyInventoryItemsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyInventoryItem** | Pointer to [**[]CopyInventoryItemType**](CopyInventoryItemType.md) | The details of Inventory Items to be copied. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code from which Inventory Items are being copied. | [optional] 
**IncludeRates** | Pointer to **bool** | If true, include to copy the Item Rates. | [optional] 
**IncludeAttributes** | Pointer to **bool** | If true, include to copy the Item Attributes. | [optional] 
**IncludeVendors** | Pointer to **bool** | If true, include to copy the Item Vendor. | [optional] 

## Methods

### NewCopyInventoryItemsType

`func NewCopyInventoryItemsType() *CopyInventoryItemsType`

NewCopyInventoryItemsType instantiates a new CopyInventoryItemsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyInventoryItemsTypeWithDefaults

`func NewCopyInventoryItemsTypeWithDefaults() *CopyInventoryItemsType`

NewCopyInventoryItemsTypeWithDefaults instantiates a new CopyInventoryItemsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyInventoryItem

`func (o *CopyInventoryItemsType) GetCopyInventoryItem() []CopyInventoryItemType`

GetCopyInventoryItem returns the CopyInventoryItem field if non-nil, zero value otherwise.

### GetCopyInventoryItemOk

`func (o *CopyInventoryItemsType) GetCopyInventoryItemOk() (*[]CopyInventoryItemType, bool)`

GetCopyInventoryItemOk returns a tuple with the CopyInventoryItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInventoryItem

`func (o *CopyInventoryItemsType) SetCopyInventoryItem(v []CopyInventoryItemType)`

SetCopyInventoryItem sets CopyInventoryItem field to given value.

### HasCopyInventoryItem

`func (o *CopyInventoryItemsType) HasCopyInventoryItem() bool`

HasCopyInventoryItem returns a boolean if a field has been set.

### GetHotelId

`func (o *CopyInventoryItemsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyInventoryItemsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyInventoryItemsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyInventoryItemsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIncludeRates

`func (o *CopyInventoryItemsType) GetIncludeRates() bool`

GetIncludeRates returns the IncludeRates field if non-nil, zero value otherwise.

### GetIncludeRatesOk

`func (o *CopyInventoryItemsType) GetIncludeRatesOk() (*bool, bool)`

GetIncludeRatesOk returns a tuple with the IncludeRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeRates

`func (o *CopyInventoryItemsType) SetIncludeRates(v bool)`

SetIncludeRates sets IncludeRates field to given value.

### HasIncludeRates

`func (o *CopyInventoryItemsType) HasIncludeRates() bool`

HasIncludeRates returns a boolean if a field has been set.

### GetIncludeAttributes

`func (o *CopyInventoryItemsType) GetIncludeAttributes() bool`

GetIncludeAttributes returns the IncludeAttributes field if non-nil, zero value otherwise.

### GetIncludeAttributesOk

`func (o *CopyInventoryItemsType) GetIncludeAttributesOk() (*bool, bool)`

GetIncludeAttributesOk returns a tuple with the IncludeAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAttributes

`func (o *CopyInventoryItemsType) SetIncludeAttributes(v bool)`

SetIncludeAttributes sets IncludeAttributes field to given value.

### HasIncludeAttributes

`func (o *CopyInventoryItemsType) HasIncludeAttributes() bool`

HasIncludeAttributes returns a boolean if a field has been set.

### GetIncludeVendors

`func (o *CopyInventoryItemsType) GetIncludeVendors() bool`

GetIncludeVendors returns the IncludeVendors field if non-nil, zero value otherwise.

### GetIncludeVendorsOk

`func (o *CopyInventoryItemsType) GetIncludeVendorsOk() (*bool, bool)`

GetIncludeVendorsOk returns a tuple with the IncludeVendors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeVendors

`func (o *CopyInventoryItemsType) SetIncludeVendors(v bool)`

SetIncludeVendors sets IncludeVendors field to given value.

### HasIncludeVendors

`func (o *CopyInventoryItemsType) HasIncludeVendors() bool`

HasIncludeVendors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


