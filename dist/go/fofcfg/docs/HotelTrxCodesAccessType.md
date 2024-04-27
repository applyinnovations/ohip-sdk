# HotelTrxCodesAccessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**TransactionCode** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Transaction Code and Description. Description is for information only and is used for fetch operation. | [optional] 

## Methods

### NewHotelTrxCodesAccessType

`func NewHotelTrxCodesAccessType() *HotelTrxCodesAccessType`

NewHotelTrxCodesAccessType instantiates a new HotelTrxCodesAccessType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTrxCodesAccessTypeWithDefaults

`func NewHotelTrxCodesAccessTypeWithDefaults() *HotelTrxCodesAccessType`

NewHotelTrxCodesAccessTypeWithDefaults instantiates a new HotelTrxCodesAccessType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HotelTrxCodesAccessType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelTrxCodesAccessType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelTrxCodesAccessType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelTrxCodesAccessType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransactionCode

`func (o *HotelTrxCodesAccessType) GetTransactionCode() []CodeDescriptionType`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *HotelTrxCodesAccessType) GetTransactionCodeOk() (*[]CodeDescriptionType, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *HotelTrxCodesAccessType) SetTransactionCode(v []CodeDescriptionType)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *HotelTrxCodesAccessType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


