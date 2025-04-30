# QuickInsertResourceStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QuickinsertResourcesProcessedInfo** | Pointer to [**[]CateringEventsProcessedInfoType**](CateringEventsProcessedInfoType.md) | Status/Info of the processed events. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewQuickInsertResourceStatus

`func NewQuickInsertResourceStatus() *QuickInsertResourceStatus`

NewQuickInsertResourceStatus instantiates a new QuickInsertResourceStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQuickInsertResourceStatusWithDefaults

`func NewQuickInsertResourceStatusWithDefaults() *QuickInsertResourceStatus`

NewQuickInsertResourceStatusWithDefaults instantiates a new QuickInsertResourceStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuickinsertResourcesProcessedInfo

`func (o *QuickInsertResourceStatus) GetQuickinsertResourcesProcessedInfo() []CateringEventsProcessedInfoType`

GetQuickinsertResourcesProcessedInfo returns the QuickinsertResourcesProcessedInfo field if non-nil, zero value otherwise.

### GetQuickinsertResourcesProcessedInfoOk

`func (o *QuickInsertResourceStatus) GetQuickinsertResourcesProcessedInfoOk() (*[]CateringEventsProcessedInfoType, bool)`

GetQuickinsertResourcesProcessedInfoOk returns a tuple with the QuickinsertResourcesProcessedInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickinsertResourcesProcessedInfo

`func (o *QuickInsertResourceStatus) SetQuickinsertResourcesProcessedInfo(v []CateringEventsProcessedInfoType)`

SetQuickinsertResourcesProcessedInfo sets QuickinsertResourcesProcessedInfo field to given value.

### HasQuickinsertResourcesProcessedInfo

`func (o *QuickInsertResourceStatus) HasQuickinsertResourcesProcessedInfo() bool`

HasQuickinsertResourcesProcessedInfo returns a boolean if a field has been set.

### GetLinks

`func (o *QuickInsertResourceStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *QuickInsertResourceStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *QuickInsertResourceStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *QuickInsertResourceStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *QuickInsertResourceStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *QuickInsertResourceStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *QuickInsertResourceStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *QuickInsertResourceStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


