# PutTemplatePackageForecastGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplatePackageForecastGroups** | Pointer to [**[]TemplatePackageForecastGroupType**](TemplatePackageForecastGroupType.md) | Template package forecast group details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTemplatePackageForecastGroupsRequest

`func NewPutTemplatePackageForecastGroupsRequest() *PutTemplatePackageForecastGroupsRequest`

NewPutTemplatePackageForecastGroupsRequest instantiates a new PutTemplatePackageForecastGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTemplatePackageForecastGroupsRequestWithDefaults

`func NewPutTemplatePackageForecastGroupsRequestWithDefaults() *PutTemplatePackageForecastGroupsRequest`

NewPutTemplatePackageForecastGroupsRequestWithDefaults instantiates a new PutTemplatePackageForecastGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTemplatePackageForecastGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTemplatePackageForecastGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTemplatePackageForecastGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTemplatePackageForecastGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplatePackageForecastGroups

`func (o *PutTemplatePackageForecastGroupsRequest) GetTemplatePackageForecastGroups() []TemplatePackageForecastGroupType`

GetTemplatePackageForecastGroups returns the TemplatePackageForecastGroups field if non-nil, zero value otherwise.

### GetTemplatePackageForecastGroupsOk

`func (o *PutTemplatePackageForecastGroupsRequest) GetTemplatePackageForecastGroupsOk() (*[]TemplatePackageForecastGroupType, bool)`

GetTemplatePackageForecastGroupsOk returns a tuple with the TemplatePackageForecastGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplatePackageForecastGroups

`func (o *PutTemplatePackageForecastGroupsRequest) SetTemplatePackageForecastGroups(v []TemplatePackageForecastGroupType)`

SetTemplatePackageForecastGroups sets TemplatePackageForecastGroups field to given value.

### HasTemplatePackageForecastGroups

`func (o *PutTemplatePackageForecastGroupsRequest) HasTemplatePackageForecastGroups() bool`

HasTemplatePackageForecastGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTemplatePackageForecastGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTemplatePackageForecastGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTemplatePackageForecastGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTemplatePackageForecastGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


