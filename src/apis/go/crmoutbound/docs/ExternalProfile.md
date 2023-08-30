# ExternalProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileInfo** | Pointer to [**ExternalProfileType**](ExternalProfileType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewExternalProfile

`func NewExternalProfile() *ExternalProfile`

NewExternalProfile instantiates a new ExternalProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalProfileWithDefaults

`func NewExternalProfileWithDefaults() *ExternalProfile`

NewExternalProfileWithDefaults instantiates a new ExternalProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileInfo

`func (o *ExternalProfile) GetProfileInfo() ExternalProfileType`

GetProfileInfo returns the ProfileInfo field if non-nil, zero value otherwise.

### GetProfileInfoOk

`func (o *ExternalProfile) GetProfileInfoOk() (*ExternalProfileType, bool)`

GetProfileInfoOk returns a tuple with the ProfileInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileInfo

`func (o *ExternalProfile) SetProfileInfo(v ExternalProfileType)`

SetProfileInfo sets ProfileInfo field to given value.

### HasProfileInfo

`func (o *ExternalProfile) HasProfileInfo() bool`

HasProfileInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ExternalProfile) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExternalProfile) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExternalProfile) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExternalProfile) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


