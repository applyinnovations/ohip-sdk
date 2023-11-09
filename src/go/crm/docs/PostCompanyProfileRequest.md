# PostCompanyProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyDetails** | Pointer to [**CompanyProfileType**](CompanyProfileType.md) |  | [optional] 
**CompanyIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**ExternalReferences** | Pointer to [**ExternalReferencesType**](ExternalReferencesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

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

`func (o *PostCompanyProfileRequest) GetCompanyIdList() ProfileIdList`

GetCompanyIdList returns the CompanyIdList field if non-nil, zero value otherwise.

### GetCompanyIdListOk

`func (o *PostCompanyProfileRequest) GetCompanyIdListOk() (*ProfileIdList, bool)`

GetCompanyIdListOk returns a tuple with the CompanyIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyIdList

`func (o *PostCompanyProfileRequest) SetCompanyIdList(v ProfileIdList)`

SetCompanyIdList sets CompanyIdList field to given value.

### HasCompanyIdList

`func (o *PostCompanyProfileRequest) HasCompanyIdList() bool`

HasCompanyIdList returns a boolean if a field has been set.

### GetExternalReferences

`func (o *PostCompanyProfileRequest) GetExternalReferences() ExternalReferencesType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *PostCompanyProfileRequest) GetExternalReferencesOk() (*ExternalReferencesType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *PostCompanyProfileRequest) SetExternalReferences(v ExternalReferencesType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *PostCompanyProfileRequest) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetLinks

`func (o *PostCompanyProfileRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCompanyProfileRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCompanyProfileRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCompanyProfileRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCompanyProfileRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCompanyProfileRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCompanyProfileRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCompanyProfileRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


