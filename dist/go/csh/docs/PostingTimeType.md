# PostingTimeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Time** | Pointer to **string** | Time of posting. | [optional] 
**Timezone** | Pointer to **string** | Timezone associated with posting time. | [optional] 

## Methods

### NewPostingTimeType

`func NewPostingTimeType() *PostingTimeType`

NewPostingTimeType instantiates a new PostingTimeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingTimeTypeWithDefaults

`func NewPostingTimeTypeWithDefaults() *PostingTimeType`

NewPostingTimeTypeWithDefaults instantiates a new PostingTimeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTime

`func (o *PostingTimeType) GetTime() string`

GetTime returns the Time field if non-nil, zero value otherwise.

### GetTimeOk

`func (o *PostingTimeType) GetTimeOk() (*string, bool)`

GetTimeOk returns a tuple with the Time field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTime

`func (o *PostingTimeType) SetTime(v string)`

SetTime sets Time field to given value.

### HasTime

`func (o *PostingTimeType) HasTime() bool`

HasTime returns a boolean if a field has been set.

### GetTimezone

`func (o *PostingTimeType) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *PostingTimeType) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *PostingTimeType) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.

### HasTimezone

`func (o *PostingTimeType) HasTimezone() bool`

HasTimezone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


