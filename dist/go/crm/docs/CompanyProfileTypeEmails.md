# CompanyProfileTypeEmails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**EmailInfo** | Pointer to [**[]EmailInfoType**](EmailInfoType.md) | Collection of Detailed information on an eMail address for the customer. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewCompanyProfileTypeEmails

`func NewCompanyProfileTypeEmails() *CompanyProfileTypeEmails`

NewCompanyProfileTypeEmails instantiates a new CompanyProfileTypeEmails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypeEmailsWithDefaults

`func NewCompanyProfileTypeEmailsWithDefaults() *CompanyProfileTypeEmails`

NewCompanyProfileTypeEmailsWithDefaults instantiates a new CompanyProfileTypeEmails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *CompanyProfileTypeEmails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompanyProfileTypeEmails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompanyProfileTypeEmails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompanyProfileTypeEmails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetEmailInfo

`func (o *CompanyProfileTypeEmails) GetEmailInfo() []EmailInfoType`

GetEmailInfo returns the EmailInfo field if non-nil, zero value otherwise.

### GetEmailInfoOk

`func (o *CompanyProfileTypeEmails) GetEmailInfoOk() (*[]EmailInfoType, bool)`

GetEmailInfoOk returns a tuple with the EmailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailInfo

`func (o *CompanyProfileTypeEmails) SetEmailInfo(v []EmailInfoType)`

SetEmailInfo sets EmailInfo field to given value.

### HasEmailInfo

`func (o *CompanyProfileTypeEmails) HasEmailInfo() bool`

HasEmailInfo returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompanyProfileTypeEmails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompanyProfileTypeEmails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompanyProfileTypeEmails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompanyProfileTypeEmails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


