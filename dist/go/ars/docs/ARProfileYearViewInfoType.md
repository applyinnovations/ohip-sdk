# ARProfileYearViewInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalProfileYearView** | Pointer to [**ARYearViewInfoType**](ARYearViewInfoType.md) |  | [optional] 
**Hotel** | Pointer to [**[]ARProfileYearViewInfoTypeHotelInner**](ARProfileYearViewInfoTypeHotelInner.md) | Year View information for the Property, based on the criteria selected. | [optional] 

## Methods

### NewARProfileYearViewInfoType

`func NewARProfileYearViewInfoType() *ARProfileYearViewInfoType`

NewARProfileYearViewInfoType instantiates a new ARProfileYearViewInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARProfileYearViewInfoTypeWithDefaults

`func NewARProfileYearViewInfoTypeWithDefaults() *ARProfileYearViewInfoType`

NewARProfileYearViewInfoTypeWithDefaults instantiates a new ARProfileYearViewInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalProfileYearView

`func (o *ARProfileYearViewInfoType) GetTotalProfileYearView() ARYearViewInfoType`

GetTotalProfileYearView returns the TotalProfileYearView field if non-nil, zero value otherwise.

### GetTotalProfileYearViewOk

`func (o *ARProfileYearViewInfoType) GetTotalProfileYearViewOk() (*ARYearViewInfoType, bool)`

GetTotalProfileYearViewOk returns a tuple with the TotalProfileYearView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalProfileYearView

`func (o *ARProfileYearViewInfoType) SetTotalProfileYearView(v ARYearViewInfoType)`

SetTotalProfileYearView sets TotalProfileYearView field to given value.

### HasTotalProfileYearView

`func (o *ARProfileYearViewInfoType) HasTotalProfileYearView() bool`

HasTotalProfileYearView returns a boolean if a field has been set.

### GetHotel

`func (o *ARProfileYearViewInfoType) GetHotel() []ARProfileYearViewInfoTypeHotelInner`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *ARProfileYearViewInfoType) GetHotelOk() (*[]ARProfileYearViewInfoTypeHotelInner, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *ARProfileYearViewInfoType) SetHotel(v []ARProfileYearViewInfoTypeHotelInner)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *ARProfileYearViewInfoType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


