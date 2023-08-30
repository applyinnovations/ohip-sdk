# FetchAutomaticTransmissionSchedules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutomaticTransmissonSchedules** | Pointer to [**[]AutomaticTransmissionScheduleType**](AutomaticTransmissionScheduleType.md) | List of automatic transmission schedules | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchAutomaticTransmissionSchedules

`func NewFetchAutomaticTransmissionSchedules() *FetchAutomaticTransmissionSchedules`

NewFetchAutomaticTransmissionSchedules instantiates a new FetchAutomaticTransmissionSchedules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchAutomaticTransmissionSchedulesWithDefaults

`func NewFetchAutomaticTransmissionSchedulesWithDefaults() *FetchAutomaticTransmissionSchedules`

NewFetchAutomaticTransmissionSchedulesWithDefaults instantiates a new FetchAutomaticTransmissionSchedules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutomaticTransmissonSchedules

`func (o *FetchAutomaticTransmissionSchedules) GetAutomaticTransmissonSchedules() []AutomaticTransmissionScheduleType`

GetAutomaticTransmissonSchedules returns the AutomaticTransmissonSchedules field if non-nil, zero value otherwise.

### GetAutomaticTransmissonSchedulesOk

`func (o *FetchAutomaticTransmissionSchedules) GetAutomaticTransmissonSchedulesOk() (*[]AutomaticTransmissionScheduleType, bool)`

GetAutomaticTransmissonSchedulesOk returns a tuple with the AutomaticTransmissonSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutomaticTransmissonSchedules

`func (o *FetchAutomaticTransmissionSchedules) SetAutomaticTransmissonSchedules(v []AutomaticTransmissionScheduleType)`

SetAutomaticTransmissonSchedules sets AutomaticTransmissonSchedules field to given value.

### HasAutomaticTransmissonSchedules

`func (o *FetchAutomaticTransmissionSchedules) HasAutomaticTransmissonSchedules() bool`

HasAutomaticTransmissonSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *FetchAutomaticTransmissionSchedules) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchAutomaticTransmissionSchedules) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchAutomaticTransmissionSchedules) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchAutomaticTransmissionSchedules) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchAutomaticTransmissionSchedules) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchAutomaticTransmissionSchedules) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchAutomaticTransmissionSchedules) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchAutomaticTransmissionSchedules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


