# ActivityInfoTypeStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Completed** | Pointer to **bool** | Indicates whether Activity is Completed or not. | [optional] 
**CompletedBy** | Pointer to **string** | Name of person who completed the Activity. | [optional] 
**CompletedOn** | Pointer to **string** | Date on which the Activity was completed. | [optional] 

## Methods

### NewActivityInfoTypeStatus

`func NewActivityInfoTypeStatus() *ActivityInfoTypeStatus`

NewActivityInfoTypeStatus instantiates a new ActivityInfoTypeStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityInfoTypeStatusWithDefaults

`func NewActivityInfoTypeStatusWithDefaults() *ActivityInfoTypeStatus`

NewActivityInfoTypeStatusWithDefaults instantiates a new ActivityInfoTypeStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompleted

`func (o *ActivityInfoTypeStatus) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *ActivityInfoTypeStatus) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *ActivityInfoTypeStatus) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *ActivityInfoTypeStatus) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetCompletedBy

`func (o *ActivityInfoTypeStatus) GetCompletedBy() string`

GetCompletedBy returns the CompletedBy field if non-nil, zero value otherwise.

### GetCompletedByOk

`func (o *ActivityInfoTypeStatus) GetCompletedByOk() (*string, bool)`

GetCompletedByOk returns a tuple with the CompletedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedBy

`func (o *ActivityInfoTypeStatus) SetCompletedBy(v string)`

SetCompletedBy sets CompletedBy field to given value.

### HasCompletedBy

`func (o *ActivityInfoTypeStatus) HasCompletedBy() bool`

HasCompletedBy returns a boolean if a field has been set.

### GetCompletedOn

`func (o *ActivityInfoTypeStatus) GetCompletedOn() string`

GetCompletedOn returns the CompletedOn field if non-nil, zero value otherwise.

### GetCompletedOnOk

`func (o *ActivityInfoTypeStatus) GetCompletedOnOk() (*string, bool)`

GetCompletedOnOk returns a tuple with the CompletedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedOn

`func (o *ActivityInfoTypeStatus) SetCompletedOn(v string)`

SetCompletedOn sets CompletedOn field to given value.

### HasCompletedOn

`func (o *ActivityInfoTypeStatus) HasCompletedOn() bool`

HasCompletedOn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


