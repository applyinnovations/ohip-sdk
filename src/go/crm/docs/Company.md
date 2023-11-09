# Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyDetails** | Pointer to [**CompanyProfileType**](CompanyProfileType.md) |  | [optional] 
**CompanyIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**ExternalReferences** | Pointer to [**ExternalReferencesType**](ExternalReferencesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCompany

`func NewCompany() *Company`

NewCompany instantiates a new Company object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyWithDefaults

`func NewCompanyWithDefaults() *Company`

NewCompanyWithDefaults instantiates a new Company object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyDetails

`func (o *Company) GetCompanyDetails() CompanyProfileType`

GetCompanyDetails returns the CompanyDetails field if non-nil, zero value otherwise.

### GetCompanyDetailsOk

`func (o *Company) GetCompanyDetailsOk() (*CompanyProfileType, bool)`

GetCompanyDetailsOk returns a tuple with the CompanyDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyDetails

`func (o *Company) SetCompanyDetails(v CompanyProfileType)`

SetCompanyDetails sets CompanyDetails field to given value.

### HasCompanyDetails

`func (o *Company) HasCompanyDetails() bool`

HasCompanyDetails returns a boolean if a field has been set.

### GetCompanyIdList

`func (o *Company) GetCompanyIdList() ProfileIdList`

GetCompanyIdList returns the CompanyIdList field if non-nil, zero value otherwise.

### GetCompanyIdListOk

`func (o *Company) GetCompanyIdListOk() (*ProfileIdList, bool)`

GetCompanyIdListOk returns a tuple with the CompanyIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyIdList

`func (o *Company) SetCompanyIdList(v ProfileIdList)`

SetCompanyIdList sets CompanyIdList field to given value.

### HasCompanyIdList

`func (o *Company) HasCompanyIdList() bool`

HasCompanyIdList returns a boolean if a field has been set.

### GetExternalReferences

`func (o *Company) GetExternalReferences() ExternalReferencesType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *Company) GetExternalReferencesOk() (*ExternalReferencesType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *Company) SetExternalReferences(v ExternalReferencesType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *Company) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetLinks

`func (o *Company) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Company) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Company) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Company) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Company) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Company) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Company) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Company) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


