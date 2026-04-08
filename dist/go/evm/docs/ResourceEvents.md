# ResourceEvents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResourceEventsSummaries** | Pointer to [**ResourceEventsSummariesInfoType**](ResourceEventsSummariesInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewResourceEvents

`func NewResourceEvents() *ResourceEvents`

NewResourceEvents instantiates a new ResourceEvents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceEventsWithDefaults

`func NewResourceEventsWithDefaults() *ResourceEvents`

NewResourceEventsWithDefaults instantiates a new ResourceEvents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResourceEventsSummaries

`func (o *ResourceEvents) GetResourceEventsSummaries() ResourceEventsSummariesInfoType`

GetResourceEventsSummaries returns the ResourceEventsSummaries field if non-nil, zero value otherwise.

### GetResourceEventsSummariesOk

`func (o *ResourceEvents) GetResourceEventsSummariesOk() (*ResourceEventsSummariesInfoType, bool)`

GetResourceEventsSummariesOk returns a tuple with the ResourceEventsSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceEventsSummaries

`func (o *ResourceEvents) SetResourceEventsSummaries(v ResourceEventsSummariesInfoType)`

SetResourceEventsSummaries sets ResourceEventsSummaries field to given value.

### HasResourceEventsSummaries

`func (o *ResourceEvents) HasResourceEventsSummaries() bool`

HasResourceEventsSummaries returns a boolean if a field has been set.

### GetLinks

`func (o *ResourceEvents) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ResourceEvents) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ResourceEvents) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ResourceEvents) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ResourceEvents) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ResourceEvents) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ResourceEvents) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ResourceEvents) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


