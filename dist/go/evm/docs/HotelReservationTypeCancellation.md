# HotelReservationTypeCancellation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationNo** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Code** | Pointer to **string** |  | [optional] 
**Date** | Pointer to **string** | Date when reservation was last cancelled. | [optional] 
**Description** | Pointer to **string** |  | [optional] 

## Methods

### NewHotelReservationTypeCancellation

`func NewHotelReservationTypeCancellation() *HotelReservationTypeCancellation`

NewHotelReservationTypeCancellation instantiates a new HotelReservationTypeCancellation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelReservationTypeCancellationWithDefaults

`func NewHotelReservationTypeCancellationWithDefaults() *HotelReservationTypeCancellation`

NewHotelReservationTypeCancellationWithDefaults instantiates a new HotelReservationTypeCancellation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationNo

`func (o *HotelReservationTypeCancellation) GetCancellationNo() UniqueIDType`

GetCancellationNo returns the CancellationNo field if non-nil, zero value otherwise.

### GetCancellationNoOk

`func (o *HotelReservationTypeCancellation) GetCancellationNoOk() (*UniqueIDType, bool)`

GetCancellationNoOk returns a tuple with the CancellationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationNo

`func (o *HotelReservationTypeCancellation) SetCancellationNo(v UniqueIDType)`

SetCancellationNo sets CancellationNo field to given value.

### HasCancellationNo

`func (o *HotelReservationTypeCancellation) HasCancellationNo() bool`

HasCancellationNo returns a boolean if a field has been set.

### GetCode

`func (o *HotelReservationTypeCancellation) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HotelReservationTypeCancellation) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HotelReservationTypeCancellation) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HotelReservationTypeCancellation) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDate

`func (o *HotelReservationTypeCancellation) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *HotelReservationTypeCancellation) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *HotelReservationTypeCancellation) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *HotelReservationTypeCancellation) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetDescription

`func (o *HotelReservationTypeCancellation) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelReservationTypeCancellation) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelReservationTypeCancellation) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelReservationTypeCancellation) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


