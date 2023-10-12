# GdsNegotiatedInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessCode** | Pointer to **string** | The GDS negotiated rate code. | [optional] 
**Order** | Pointer to **int32** | The sell order. | [optional] 
**Inactive** | Pointer to **bool** | The GDS Negotiated Rate is inactive or not | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 

## Methods

### NewGdsNegotiatedInfoType

`func NewGdsNegotiatedInfoType() *GdsNegotiatedInfoType`

NewGdsNegotiatedInfoType instantiates a new GdsNegotiatedInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGdsNegotiatedInfoTypeWithDefaults

`func NewGdsNegotiatedInfoTypeWithDefaults() *GdsNegotiatedInfoType`

NewGdsNegotiatedInfoTypeWithDefaults instantiates a new GdsNegotiatedInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessCode

`func (o *GdsNegotiatedInfoType) GetAccessCode() string`

GetAccessCode returns the AccessCode field if non-nil, zero value otherwise.

### GetAccessCodeOk

`func (o *GdsNegotiatedInfoType) GetAccessCodeOk() (*string, bool)`

GetAccessCodeOk returns a tuple with the AccessCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessCode

`func (o *GdsNegotiatedInfoType) SetAccessCode(v string)`

SetAccessCode sets AccessCode field to given value.

### HasAccessCode

`func (o *GdsNegotiatedInfoType) HasAccessCode() bool`

HasAccessCode returns a boolean if a field has been set.

### GetOrder

`func (o *GdsNegotiatedInfoType) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *GdsNegotiatedInfoType) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *GdsNegotiatedInfoType) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *GdsNegotiatedInfoType) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetInactive

`func (o *GdsNegotiatedInfoType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *GdsNegotiatedInfoType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *GdsNegotiatedInfoType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *GdsNegotiatedInfoType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetStart

`func (o *GdsNegotiatedInfoType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *GdsNegotiatedInfoType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *GdsNegotiatedInfoType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *GdsNegotiatedInfoType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *GdsNegotiatedInfoType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *GdsNegotiatedInfoType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *GdsNegotiatedInfoType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *GdsNegotiatedInfoType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


