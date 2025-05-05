# Reports

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reports** | Pointer to [**ReportsType**](ReportsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReports

`func NewReports() *Reports`

NewReports instantiates a new Reports object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportsWithDefaults

`func NewReportsWithDefaults() *Reports`

NewReportsWithDefaults instantiates a new Reports object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReports

`func (o *Reports) GetReports() ReportsType`

GetReports returns the Reports field if non-nil, zero value otherwise.

### GetReportsOk

`func (o *Reports) GetReportsOk() (*ReportsType, bool)`

GetReportsOk returns a tuple with the Reports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReports

`func (o *Reports) SetReports(v ReportsType)`

SetReports sets Reports field to given value.

### HasReports

`func (o *Reports) HasReports() bool`

HasReports returns a boolean if a field has been set.

### GetLinks

`func (o *Reports) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Reports) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Reports) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Reports) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Reports) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Reports) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Reports) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Reports) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


