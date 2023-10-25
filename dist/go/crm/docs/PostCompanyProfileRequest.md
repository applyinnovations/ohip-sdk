# PostCompanyProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyDetails** | Pointer to [**CompanyProfileType**](CompanyProfileType.md) |  | [optional] 
**CompanyIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCompanyProfileRequest

`func NewPostCompanyProfileRequest() *PostCompanyProfileRequest`

NewPostCompanyProfileRequest instantiates a new PostCompanyProfileRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCompanyProfileRequestWithDefaults

`func NewPostCompanyProfileRequestWithDefaults() *PostCompanyProfileRequest`

NewPostCompanyProfileRequestWithDefaults instantiates a new PostCompanyProfileRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyDetails

`func (o *PostCompanyProfileRequest) GetCompanyDetails() CompanyProfileType`

GetCompanyDetails returns the CompanyDetails field if non-nil, zero value otherwise.

### GetCompanyDetailsOk

`func (o *PostCompanyProfileRequest) GetCompanyDetailsOk() (*CompanyProfileType, bool)`

GetCompanyDetailsOk returns a tuple with the CompanyDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyDetails

`func (o *PostCompanyProfileRequest) SetCompanyDetails(v CompanyProfileType)`

SetCompanyDetails sets CompanyDetails field to given value.

### HasCompanyDetails

`func (o *PostCompanyProfileRequest) HasCompanyDetails() bool`

HasCompanyDetails returns a boolean if a field has been set.

### GetCompanyIdList

`func (o *PostCompanyProfileRequest) GetCompanyIdList() []UniqueIDType`

GetCompanyIdList returns the CompanyIdList field if non-nil, zero value otherwise.

### GetCompanyIdListOk

`func (o *PostCompanyProfileRequest) GetCompanyIdListOk() (*[]UniqueIDType, bool)`

GetCompanyIdListOk returns a tuple with the CompanyIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyIdList

`func (o *PostCompanyProfileRequest) SetCompanyIdList(v []UniqueIDType)`

SetCompanyIdList sets CompanyIdList field to given value.

### HasCompanyIdList

`func (o *PostCompanyProfileRequest) HasCompanyIdList() bool`

HasCompanyIdList returns a boolean if a field has been set.

### GetExternalReferences

`func (o *PostCompanyProfileRequest) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *PostCompanyProfileRequest) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *PostCompanyProfileRequest) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *PostCompanyProfileRequest) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetLinks

`func (o *PostCompanyProfileRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCompanyProfileRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCompanyProfileRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCompanyProfileRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCompanyProfileRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCompanyProfileRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCompanyProfileRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCompanyProfileRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


