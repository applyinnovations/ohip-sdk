# ExcludedDateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Contains exclusion date. | [optional] 
**Reason** | Pointer to [**ExclusionReasonType**](ExclusionReasonType.md) |  | [optional] 

## Methods

### NewExcludedDateType

`func NewExcludedDateType() *ExcludedDateType`

NewExcludedDateType instantiates a new ExcludedDateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExcludedDateTypeWithDefaults

`func NewExcludedDateTypeWithDefaults() *ExcludedDateType`

NewExcludedDateTypeWithDefaults instantiates a new ExcludedDateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *ExcludedDateType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ExcludedDateType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ExcludedDateType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *ExcludedDateType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetReason

`func (o *ExcludedDateType) GetReason() ExclusionReasonType`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ExcludedDateType) GetReasonOk() (*ExclusionReasonType, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ExcludedDateType) SetReason(v ExclusionReasonType)`

SetReason sets Reason field to given value.

### HasReason

`func (o *ExcludedDateType) HasReason() bool`

HasReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


