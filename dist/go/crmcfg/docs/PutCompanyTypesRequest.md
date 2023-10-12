# PutCompanyTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyTypes** | Pointer to [**[]CompanyTypeType**](CompanyTypeType.md) | List of Company Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutCompanyTypesRequest

`func NewPutCompanyTypesRequest() *PutCompanyTypesRequest`

NewPutCompanyTypesRequest instantiates a new PutCompanyTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCompanyTypesRequestWithDefaults

`func NewPutCompanyTypesRequestWithDefaults() *PutCompanyTypesRequest`

NewPutCompanyTypesRequestWithDefaults instantiates a new PutCompanyTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompanyTypes

`func (o *PutCompanyTypesRequest) GetCompanyTypes() []CompanyTypeType`

GetCompanyTypes returns the CompanyTypes field if non-nil, zero value otherwise.

### GetCompanyTypesOk

`func (o *PutCompanyTypesRequest) GetCompanyTypesOk() (*[]CompanyTypeType, bool)`

GetCompanyTypesOk returns a tuple with the CompanyTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyTypes

`func (o *PutCompanyTypesRequest) SetCompanyTypes(v []CompanyTypeType)`

SetCompanyTypes sets CompanyTypes field to given value.

### HasCompanyTypes

`func (o *PutCompanyTypesRequest) HasCompanyTypes() bool`

HasCompanyTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PutCompanyTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCompanyTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCompanyTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCompanyTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCompanyTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCompanyTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCompanyTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCompanyTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


