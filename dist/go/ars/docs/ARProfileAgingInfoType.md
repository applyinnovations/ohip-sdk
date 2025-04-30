# ARProfileAgingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalProfileAging** | Pointer to [**ARAgingInfoType**](ARAgingInfoType.md) |  | [optional] 
**Hotel** | Pointer to [**[]ARProfileAgingInfoTypeHotelInner**](ARProfileAgingInfoTypeHotelInner.md) | Aging bucket information for the Property, based on the criteria selected. | [optional] 

## Methods

### NewARProfileAgingInfoType

`func NewARProfileAgingInfoType() *ARProfileAgingInfoType`

NewARProfileAgingInfoType instantiates a new ARProfileAgingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARProfileAgingInfoTypeWithDefaults

`func NewARProfileAgingInfoTypeWithDefaults() *ARProfileAgingInfoType`

NewARProfileAgingInfoTypeWithDefaults instantiates a new ARProfileAgingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalProfileAging

`func (o *ARProfileAgingInfoType) GetTotalProfileAging() ARAgingInfoType`

GetTotalProfileAging returns the TotalProfileAging field if non-nil, zero value otherwise.

### GetTotalProfileAgingOk

`func (o *ARProfileAgingInfoType) GetTotalProfileAgingOk() (*ARAgingInfoType, bool)`

GetTotalProfileAgingOk returns a tuple with the TotalProfileAging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalProfileAging

`func (o *ARProfileAgingInfoType) SetTotalProfileAging(v ARAgingInfoType)`

SetTotalProfileAging sets TotalProfileAging field to given value.

### HasTotalProfileAging

`func (o *ARProfileAgingInfoType) HasTotalProfileAging() bool`

HasTotalProfileAging returns a boolean if a field has been set.

### GetHotel

`func (o *ARProfileAgingInfoType) GetHotel() []ARProfileAgingInfoTypeHotelInner`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *ARProfileAgingInfoType) GetHotelOk() (*[]ARProfileAgingInfoTypeHotelInner, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *ARProfileAgingInfoType) SetHotel(v []ARProfileAgingInfoTypeHotelInner)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *ARProfileAgingInfoType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


