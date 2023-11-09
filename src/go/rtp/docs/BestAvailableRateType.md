# BestAvailableRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Best available rate date available | [optional] 
**LengthOfStay** | Pointer to **int32** | Best available rate length of stay | [optional] 
**RateCode** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 

## Methods

### NewBestAvailableRateType

`func NewBestAvailableRateType() *BestAvailableRateType`

NewBestAvailableRateType instantiates a new BestAvailableRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBestAvailableRateTypeWithDefaults

`func NewBestAvailableRateTypeWithDefaults() *BestAvailableRateType`

NewBestAvailableRateTypeWithDefaults instantiates a new BestAvailableRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *BestAvailableRateType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *BestAvailableRateType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *BestAvailableRateType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *BestAvailableRateType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetLengthOfStay

`func (o *BestAvailableRateType) GetLengthOfStay() int32`

GetLengthOfStay returns the LengthOfStay field if non-nil, zero value otherwise.

### GetLengthOfStayOk

`func (o *BestAvailableRateType) GetLengthOfStayOk() (*int32, bool)`

GetLengthOfStayOk returns a tuple with the LengthOfStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLengthOfStay

`func (o *BestAvailableRateType) SetLengthOfStay(v int32)`

SetLengthOfStay sets LengthOfStay field to given value.

### HasLengthOfStay

`func (o *BestAvailableRateType) HasLengthOfStay() bool`

HasLengthOfStay returns a boolean if a field has been set.

### GetRateCode

`func (o *BestAvailableRateType) GetRateCode() CodeListType`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *BestAvailableRateType) GetRateCodeOk() (*CodeListType, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *BestAvailableRateType) SetRateCode(v CodeListType)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *BestAvailableRateType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


