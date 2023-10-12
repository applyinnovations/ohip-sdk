# PostGuaranteeCodeScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuaranteeCodeSchedule** | Pointer to [**CreateGuaranteeCodeScheduleType**](CreateGuaranteeCodeScheduleType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostGuaranteeCodeScheduleRequest

`func NewPostGuaranteeCodeScheduleRequest() *PostGuaranteeCodeScheduleRequest`

NewPostGuaranteeCodeScheduleRequest instantiates a new PostGuaranteeCodeScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostGuaranteeCodeScheduleRequestWithDefaults

`func NewPostGuaranteeCodeScheduleRequestWithDefaults() *PostGuaranteeCodeScheduleRequest`

NewPostGuaranteeCodeScheduleRequestWithDefaults instantiates a new PostGuaranteeCodeScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuaranteeCodeSchedule

`func (o *PostGuaranteeCodeScheduleRequest) GetGuaranteeCodeSchedule() CreateGuaranteeCodeScheduleType`

GetGuaranteeCodeSchedule returns the GuaranteeCodeSchedule field if non-nil, zero value otherwise.

### GetGuaranteeCodeScheduleOk

`func (o *PostGuaranteeCodeScheduleRequest) GetGuaranteeCodeScheduleOk() (*CreateGuaranteeCodeScheduleType, bool)`

GetGuaranteeCodeScheduleOk returns a tuple with the GuaranteeCodeSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCodeSchedule

`func (o *PostGuaranteeCodeScheduleRequest) SetGuaranteeCodeSchedule(v CreateGuaranteeCodeScheduleType)`

SetGuaranteeCodeSchedule sets GuaranteeCodeSchedule field to given value.

### HasGuaranteeCodeSchedule

`func (o *PostGuaranteeCodeScheduleRequest) HasGuaranteeCodeSchedule() bool`

HasGuaranteeCodeSchedule returns a boolean if a field has been set.

### GetLinks

`func (o *PostGuaranteeCodeScheduleRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostGuaranteeCodeScheduleRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostGuaranteeCodeScheduleRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostGuaranteeCodeScheduleRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostGuaranteeCodeScheduleRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostGuaranteeCodeScheduleRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostGuaranteeCodeScheduleRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostGuaranteeCodeScheduleRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


