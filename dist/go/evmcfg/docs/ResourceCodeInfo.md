# ResourceCodeInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResourceCode** | Pointer to **string** | Newly copied resource or configuration code. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewResourceCodeInfo

`func NewResourceCodeInfo() *ResourceCodeInfo`

NewResourceCodeInfo instantiates a new ResourceCodeInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceCodeInfoWithDefaults

`func NewResourceCodeInfoWithDefaults() *ResourceCodeInfo`

NewResourceCodeInfoWithDefaults instantiates a new ResourceCodeInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResourceCode

`func (o *ResourceCodeInfo) GetResourceCode() string`

GetResourceCode returns the ResourceCode field if non-nil, zero value otherwise.

### GetResourceCodeOk

`func (o *ResourceCodeInfo) GetResourceCodeOk() (*string, bool)`

GetResourceCodeOk returns a tuple with the ResourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceCode

`func (o *ResourceCodeInfo) SetResourceCode(v string)`

SetResourceCode sets ResourceCode field to given value.

### HasResourceCode

`func (o *ResourceCodeInfo) HasResourceCode() bool`

HasResourceCode returns a boolean if a field has been set.

### GetLinks

`func (o *ResourceCodeInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ResourceCodeInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ResourceCodeInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ResourceCodeInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ResourceCodeInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ResourceCodeInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ResourceCodeInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ResourceCodeInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


