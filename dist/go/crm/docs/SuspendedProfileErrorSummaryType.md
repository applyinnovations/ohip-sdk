# SuspendedProfileErrorSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorCount** | Pointer to **float32** | Count of how many profiles encountered this error. | [optional] 
**ErrorDescription** | Pointer to **string** | Represents Error summary of the suspended profiles. | [optional] 

## Methods

### NewSuspendedProfileErrorSummaryType

`func NewSuspendedProfileErrorSummaryType() *SuspendedProfileErrorSummaryType`

NewSuspendedProfileErrorSummaryType instantiates a new SuspendedProfileErrorSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedProfileErrorSummaryTypeWithDefaults

`func NewSuspendedProfileErrorSummaryTypeWithDefaults() *SuspendedProfileErrorSummaryType`

NewSuspendedProfileErrorSummaryTypeWithDefaults instantiates a new SuspendedProfileErrorSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorCount

`func (o *SuspendedProfileErrorSummaryType) GetErrorCount() float32`

GetErrorCount returns the ErrorCount field if non-nil, zero value otherwise.

### GetErrorCountOk

`func (o *SuspendedProfileErrorSummaryType) GetErrorCountOk() (*float32, bool)`

GetErrorCountOk returns a tuple with the ErrorCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCount

`func (o *SuspendedProfileErrorSummaryType) SetErrorCount(v float32)`

SetErrorCount sets ErrorCount field to given value.

### HasErrorCount

`func (o *SuspendedProfileErrorSummaryType) HasErrorCount() bool`

HasErrorCount returns a boolean if a field has been set.

### GetErrorDescription

`func (o *SuspendedProfileErrorSummaryType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *SuspendedProfileErrorSummaryType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *SuspendedProfileErrorSummaryType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *SuspendedProfileErrorSummaryType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


