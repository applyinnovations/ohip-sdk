# PostWashScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WashCodes** | Pointer to [**[]WashCodeType**](WashCodeType.md) | Wash Code, which will allow the user to define standard schedules that can be attached to blocks prior to the block&#39;s cutoff date to automate this process. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostWashScheduleRequest

`func NewPostWashScheduleRequest() *PostWashScheduleRequest`

NewPostWashScheduleRequest instantiates a new PostWashScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostWashScheduleRequestWithDefaults

`func NewPostWashScheduleRequestWithDefaults() *PostWashScheduleRequest`

NewPostWashScheduleRequestWithDefaults instantiates a new PostWashScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWashCodes

`func (o *PostWashScheduleRequest) GetWashCodes() []WashCodeType`

GetWashCodes returns the WashCodes field if non-nil, zero value otherwise.

### GetWashCodesOk

`func (o *PostWashScheduleRequest) GetWashCodesOk() (*[]WashCodeType, bool)`

GetWashCodesOk returns a tuple with the WashCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashCodes

`func (o *PostWashScheduleRequest) SetWashCodes(v []WashCodeType)`

SetWashCodes sets WashCodes field to given value.

### HasWashCodes

`func (o *PostWashScheduleRequest) HasWashCodes() bool`

HasWashCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostWashScheduleRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostWashScheduleRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostWashScheduleRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostWashScheduleRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostWashScheduleRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostWashScheduleRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostWashScheduleRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostWashScheduleRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


