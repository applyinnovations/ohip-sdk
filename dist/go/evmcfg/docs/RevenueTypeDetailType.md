# RevenueTypeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code is used to set associated revenue type details. | [optional] 
**RevenueMinimum** | Pointer to **bool** | Indicates if this revenue type contributes to the revenue minimum. | [optional] 
**Tax** | Pointer to **float32** | VAT % to calculate Net Catering Revenues. | [optional] 

## Methods

### NewRevenueTypeDetailType

`func NewRevenueTypeDetailType() *RevenueTypeDetailType`

NewRevenueTypeDetailType instantiates a new RevenueTypeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueTypeDetailTypeWithDefaults

`func NewRevenueTypeDetailTypeWithDefaults() *RevenueTypeDetailType`

NewRevenueTypeDetailTypeWithDefaults instantiates a new RevenueTypeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RevenueTypeDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RevenueTypeDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RevenueTypeDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RevenueTypeDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRevenueMinimum

`func (o *RevenueTypeDetailType) GetRevenueMinimum() bool`

GetRevenueMinimum returns the RevenueMinimum field if non-nil, zero value otherwise.

### GetRevenueMinimumOk

`func (o *RevenueTypeDetailType) GetRevenueMinimumOk() (*bool, bool)`

GetRevenueMinimumOk returns a tuple with the RevenueMinimum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueMinimum

`func (o *RevenueTypeDetailType) SetRevenueMinimum(v bool)`

SetRevenueMinimum sets RevenueMinimum field to given value.

### HasRevenueMinimum

`func (o *RevenueTypeDetailType) HasRevenueMinimum() bool`

HasRevenueMinimum returns a boolean if a field has been set.

### GetTax

`func (o *RevenueTypeDetailType) GetTax() float32`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *RevenueTypeDetailType) GetTaxOk() (*float32, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *RevenueTypeDetailType) SetTax(v float32)`

SetTax sets Tax field to given value.

### HasTax

`func (o *RevenueTypeDetailType) HasTax() bool`

HasTax returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


