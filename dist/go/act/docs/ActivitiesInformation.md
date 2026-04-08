# ActivitiesInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivitiesInformation** | Pointer to [**[]ActivityDetailsType**](ActivityDetailsType.md) | Activity information in detail. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewActivitiesInformation

`func NewActivitiesInformation() *ActivitiesInformation`

NewActivitiesInformation instantiates a new ActivitiesInformation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivitiesInformationWithDefaults

`func NewActivitiesInformationWithDefaults() *ActivitiesInformation`

NewActivitiesInformationWithDefaults instantiates a new ActivitiesInformation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivitiesInformation

`func (o *ActivitiesInformation) GetActivitiesInformation() []ActivityDetailsType`

GetActivitiesInformation returns the ActivitiesInformation field if non-nil, zero value otherwise.

### GetActivitiesInformationOk

`func (o *ActivitiesInformation) GetActivitiesInformationOk() (*[]ActivityDetailsType, bool)`

GetActivitiesInformationOk returns a tuple with the ActivitiesInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitiesInformation

`func (o *ActivitiesInformation) SetActivitiesInformation(v []ActivityDetailsType)`

SetActivitiesInformation sets ActivitiesInformation field to given value.

### HasActivitiesInformation

`func (o *ActivitiesInformation) HasActivitiesInformation() bool`

HasActivitiesInformation returns a boolean if a field has been set.

### GetLinks

`func (o *ActivitiesInformation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivitiesInformation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivitiesInformation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivitiesInformation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivitiesInformation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivitiesInformation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivitiesInformation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivitiesInformation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


