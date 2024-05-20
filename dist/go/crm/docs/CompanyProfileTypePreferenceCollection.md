# CompanyProfileTypePreferenceCollection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**PreferenceType** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Collection of Detailed information on preferences of the customer. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewCompanyProfileTypePreferenceCollection

`func NewCompanyProfileTypePreferenceCollection() *CompanyProfileTypePreferenceCollection`

NewCompanyProfileTypePreferenceCollection instantiates a new CompanyProfileTypePreferenceCollection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypePreferenceCollectionWithDefaults

`func NewCompanyProfileTypePreferenceCollectionWithDefaults() *CompanyProfileTypePreferenceCollection`

NewCompanyProfileTypePreferenceCollectionWithDefaults instantiates a new CompanyProfileTypePreferenceCollection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *CompanyProfileTypePreferenceCollection) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompanyProfileTypePreferenceCollection) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompanyProfileTypePreferenceCollection) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompanyProfileTypePreferenceCollection) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetPreferenceType

`func (o *CompanyProfileTypePreferenceCollection) GetPreferenceType() []PreferenceTypeType`

GetPreferenceType returns the PreferenceType field if non-nil, zero value otherwise.

### GetPreferenceTypeOk

`func (o *CompanyProfileTypePreferenceCollection) GetPreferenceTypeOk() (*[]PreferenceTypeType, bool)`

GetPreferenceTypeOk returns a tuple with the PreferenceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceType

`func (o *CompanyProfileTypePreferenceCollection) SetPreferenceType(v []PreferenceTypeType)`

SetPreferenceType sets PreferenceType field to given value.

### HasPreferenceType

`func (o *CompanyProfileTypePreferenceCollection) HasPreferenceType() bool`

HasPreferenceType returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompanyProfileTypePreferenceCollection) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompanyProfileTypePreferenceCollection) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompanyProfileTypePreferenceCollection) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompanyProfileTypePreferenceCollection) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


