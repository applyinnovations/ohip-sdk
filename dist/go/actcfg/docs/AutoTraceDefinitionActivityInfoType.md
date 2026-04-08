# AutoTraceDefinitionActivityInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityClass** | Pointer to [**ActivityConfigClassType**](ActivityConfigClassType.md) |  | [optional] 
**ActivityTypeCode** | Pointer to **string** | Type for the Activity. | [optional] 
**Purpose** | Pointer to **string** | Purpose for the Activity. | [optional] 
**ActivityStartTime** | Pointer to **string** | Start Time of the Activity. | [optional] 
**ActivityStartDate** | Pointer to **string** | Start Date of the Activity.Input for this field is selected from the list. | [optional] 
**DaysFromActivityStartDate** | Pointer to **int32** | Number of days from activity start date | [optional] 

## Methods

### NewAutoTraceDefinitionActivityInfoType

`func NewAutoTraceDefinitionActivityInfoType() *AutoTraceDefinitionActivityInfoType`

NewAutoTraceDefinitionActivityInfoType instantiates a new AutoTraceDefinitionActivityInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoTraceDefinitionActivityInfoTypeWithDefaults

`func NewAutoTraceDefinitionActivityInfoTypeWithDefaults() *AutoTraceDefinitionActivityInfoType`

NewAutoTraceDefinitionActivityInfoTypeWithDefaults instantiates a new AutoTraceDefinitionActivityInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityClass

`func (o *AutoTraceDefinitionActivityInfoType) GetActivityClass() ActivityConfigClassType`

GetActivityClass returns the ActivityClass field if non-nil, zero value otherwise.

### GetActivityClassOk

`func (o *AutoTraceDefinitionActivityInfoType) GetActivityClassOk() (*ActivityConfigClassType, bool)`

GetActivityClassOk returns a tuple with the ActivityClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityClass

`func (o *AutoTraceDefinitionActivityInfoType) SetActivityClass(v ActivityConfigClassType)`

SetActivityClass sets ActivityClass field to given value.

### HasActivityClass

`func (o *AutoTraceDefinitionActivityInfoType) HasActivityClass() bool`

HasActivityClass returns a boolean if a field has been set.

### GetActivityTypeCode

`func (o *AutoTraceDefinitionActivityInfoType) GetActivityTypeCode() string`

GetActivityTypeCode returns the ActivityTypeCode field if non-nil, zero value otherwise.

### GetActivityTypeCodeOk

`func (o *AutoTraceDefinitionActivityInfoType) GetActivityTypeCodeOk() (*string, bool)`

GetActivityTypeCodeOk returns a tuple with the ActivityTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTypeCode

`func (o *AutoTraceDefinitionActivityInfoType) SetActivityTypeCode(v string)`

SetActivityTypeCode sets ActivityTypeCode field to given value.

### HasActivityTypeCode

`func (o *AutoTraceDefinitionActivityInfoType) HasActivityTypeCode() bool`

HasActivityTypeCode returns a boolean if a field has been set.

### GetPurpose

`func (o *AutoTraceDefinitionActivityInfoType) GetPurpose() string`

GetPurpose returns the Purpose field if non-nil, zero value otherwise.

### GetPurposeOk

`func (o *AutoTraceDefinitionActivityInfoType) GetPurposeOk() (*string, bool)`

GetPurposeOk returns a tuple with the Purpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurpose

`func (o *AutoTraceDefinitionActivityInfoType) SetPurpose(v string)`

SetPurpose sets Purpose field to given value.

### HasPurpose

`func (o *AutoTraceDefinitionActivityInfoType) HasPurpose() bool`

HasPurpose returns a boolean if a field has been set.

### GetActivityStartTime

`func (o *AutoTraceDefinitionActivityInfoType) GetActivityStartTime() string`

GetActivityStartTime returns the ActivityStartTime field if non-nil, zero value otherwise.

### GetActivityStartTimeOk

`func (o *AutoTraceDefinitionActivityInfoType) GetActivityStartTimeOk() (*string, bool)`

GetActivityStartTimeOk returns a tuple with the ActivityStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityStartTime

`func (o *AutoTraceDefinitionActivityInfoType) SetActivityStartTime(v string)`

SetActivityStartTime sets ActivityStartTime field to given value.

### HasActivityStartTime

`func (o *AutoTraceDefinitionActivityInfoType) HasActivityStartTime() bool`

HasActivityStartTime returns a boolean if a field has been set.

### GetActivityStartDate

`func (o *AutoTraceDefinitionActivityInfoType) GetActivityStartDate() string`

GetActivityStartDate returns the ActivityStartDate field if non-nil, zero value otherwise.

### GetActivityStartDateOk

`func (o *AutoTraceDefinitionActivityInfoType) GetActivityStartDateOk() (*string, bool)`

GetActivityStartDateOk returns a tuple with the ActivityStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityStartDate

`func (o *AutoTraceDefinitionActivityInfoType) SetActivityStartDate(v string)`

SetActivityStartDate sets ActivityStartDate field to given value.

### HasActivityStartDate

`func (o *AutoTraceDefinitionActivityInfoType) HasActivityStartDate() bool`

HasActivityStartDate returns a boolean if a field has been set.

### GetDaysFromActivityStartDate

`func (o *AutoTraceDefinitionActivityInfoType) GetDaysFromActivityStartDate() int32`

GetDaysFromActivityStartDate returns the DaysFromActivityStartDate field if non-nil, zero value otherwise.

### GetDaysFromActivityStartDateOk

`func (o *AutoTraceDefinitionActivityInfoType) GetDaysFromActivityStartDateOk() (*int32, bool)`

GetDaysFromActivityStartDateOk returns a tuple with the DaysFromActivityStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysFromActivityStartDate

`func (o *AutoTraceDefinitionActivityInfoType) SetDaysFromActivityStartDate(v int32)`

SetDaysFromActivityStartDate sets DaysFromActivityStartDate field to given value.

### HasDaysFromActivityStartDate

`func (o *AutoTraceDefinitionActivityInfoType) HasDaysFromActivityStartDate() bool`

HasDaysFromActivityStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


