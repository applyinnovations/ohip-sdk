# ProfileChannelRatePlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlanCode** | **string** | Rate Plan Code (length of string must be less than or equal to 20) | 
**ChannelRatePlanCode** | **string** | Chennel Rate Plan Code (length of string must be less than or equal to 20) | 
**StartDate** | Pointer to **string** | ISO 8601 date Format &#39;YYYY-MM-DD&#39; | [optional] 
**EndDate** | Pointer to **string** | ISO 8601 date Format &#39;YYYY-MM-DD&#39; | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**ChannelRatePlanOrder** | Pointer to **int32** | Channel Rate Plan Order | [optional] 
**ChannelRateAccessCodes** | [**[]ProfileChannelRateAccessCode**](ProfileChannelRateAccessCode.md) |  | 

## Methods

### NewProfileChannelRatePlan

`func NewProfileChannelRatePlan(ratePlanCode string, channelRatePlanCode string, channelRateAccessCodes []ProfileChannelRateAccessCode, ) *ProfileChannelRatePlan`

NewProfileChannelRatePlan instantiates a new ProfileChannelRatePlan object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileChannelRatePlanWithDefaults

`func NewProfileChannelRatePlanWithDefaults() *ProfileChannelRatePlan`

NewProfileChannelRatePlanWithDefaults instantiates a new ProfileChannelRatePlan object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlanCode

`func (o *ProfileChannelRatePlan) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ProfileChannelRatePlan) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ProfileChannelRatePlan) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.


### GetChannelRatePlanCode

`func (o *ProfileChannelRatePlan) GetChannelRatePlanCode() string`

GetChannelRatePlanCode returns the ChannelRatePlanCode field if non-nil, zero value otherwise.

### GetChannelRatePlanCodeOk

`func (o *ProfileChannelRatePlan) GetChannelRatePlanCodeOk() (*string, bool)`

GetChannelRatePlanCodeOk returns a tuple with the ChannelRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCode

`func (o *ProfileChannelRatePlan) SetChannelRatePlanCode(v string)`

SetChannelRatePlanCode sets ChannelRatePlanCode field to given value.


### GetStartDate

`func (o *ProfileChannelRatePlan) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ProfileChannelRatePlan) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ProfileChannelRatePlan) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ProfileChannelRatePlan) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ProfileChannelRatePlan) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ProfileChannelRatePlan) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ProfileChannelRatePlan) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ProfileChannelRatePlan) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetActive

`func (o *ProfileChannelRatePlan) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ProfileChannelRatePlan) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ProfileChannelRatePlan) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ProfileChannelRatePlan) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetChannelRatePlanOrder

`func (o *ProfileChannelRatePlan) GetChannelRatePlanOrder() int32`

GetChannelRatePlanOrder returns the ChannelRatePlanOrder field if non-nil, zero value otherwise.

### GetChannelRatePlanOrderOk

`func (o *ProfileChannelRatePlan) GetChannelRatePlanOrderOk() (*int32, bool)`

GetChannelRatePlanOrderOk returns a tuple with the ChannelRatePlanOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanOrder

`func (o *ProfileChannelRatePlan) SetChannelRatePlanOrder(v int32)`

SetChannelRatePlanOrder sets ChannelRatePlanOrder field to given value.

### HasChannelRatePlanOrder

`func (o *ProfileChannelRatePlan) HasChannelRatePlanOrder() bool`

HasChannelRatePlanOrder returns a boolean if a field has been set.

### GetChannelRateAccessCodes

`func (o *ProfileChannelRatePlan) GetChannelRateAccessCodes() []ProfileChannelRateAccessCode`

GetChannelRateAccessCodes returns the ChannelRateAccessCodes field if non-nil, zero value otherwise.

### GetChannelRateAccessCodesOk

`func (o *ProfileChannelRatePlan) GetChannelRateAccessCodesOk() (*[]ProfileChannelRateAccessCode, bool)`

GetChannelRateAccessCodesOk returns a tuple with the ChannelRateAccessCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateAccessCodes

`func (o *ProfileChannelRatePlan) SetChannelRateAccessCodes(v []ProfileChannelRateAccessCode)`

SetChannelRateAccessCodes sets ChannelRateAccessCodes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


