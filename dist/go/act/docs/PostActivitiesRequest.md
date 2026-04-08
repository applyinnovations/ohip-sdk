# PostActivitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivitiesInformation** | Pointer to [**[]ActivityDetailsType**](ActivityDetailsType.md) | Activity information in detail. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostActivitiesRequest

`func NewPostActivitiesRequest() *PostActivitiesRequest`

NewPostActivitiesRequest instantiates a new PostActivitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostActivitiesRequestWithDefaults

`func NewPostActivitiesRequestWithDefaults() *PostActivitiesRequest`

NewPostActivitiesRequestWithDefaults instantiates a new PostActivitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivitiesInformation

`func (o *PostActivitiesRequest) GetActivitiesInformation() []ActivityDetailsType`

GetActivitiesInformation returns the ActivitiesInformation field if non-nil, zero value otherwise.

### GetActivitiesInformationOk

`func (o *PostActivitiesRequest) GetActivitiesInformationOk() (*[]ActivityDetailsType, bool)`

GetActivitiesInformationOk returns a tuple with the ActivitiesInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitiesInformation

`func (o *PostActivitiesRequest) SetActivitiesInformation(v []ActivityDetailsType)`

SetActivitiesInformation sets ActivitiesInformation field to given value.

### HasActivitiesInformation

`func (o *PostActivitiesRequest) HasActivitiesInformation() bool`

HasActivitiesInformation returns a boolean if a field has been set.

### GetLinks

`func (o *PostActivitiesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostActivitiesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostActivitiesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostActivitiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostActivitiesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostActivitiesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostActivitiesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostActivitiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


