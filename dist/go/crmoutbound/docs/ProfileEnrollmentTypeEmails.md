# ProfileEnrollmentTypeEmails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailInfo** | Pointer to [**[]EmailInfoType**](EmailInfoType.md) | Collection of Detailed information on an eMail address for the customer. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileEnrollmentTypeEmails

`func NewProfileEnrollmentTypeEmails() *ProfileEnrollmentTypeEmails`

NewProfileEnrollmentTypeEmails instantiates a new ProfileEnrollmentTypeEmails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileEnrollmentTypeEmailsWithDefaults

`func NewProfileEnrollmentTypeEmailsWithDefaults() *ProfileEnrollmentTypeEmails`

NewProfileEnrollmentTypeEmailsWithDefaults instantiates a new ProfileEnrollmentTypeEmails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailInfo

`func (o *ProfileEnrollmentTypeEmails) GetEmailInfo() []EmailInfoType`

GetEmailInfo returns the EmailInfo field if non-nil, zero value otherwise.

### GetEmailInfoOk

`func (o *ProfileEnrollmentTypeEmails) GetEmailInfoOk() (*[]EmailInfoType, bool)`

GetEmailInfoOk returns a tuple with the EmailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailInfo

`func (o *ProfileEnrollmentTypeEmails) SetEmailInfo(v []EmailInfoType)`

SetEmailInfo sets EmailInfo field to given value.

### HasEmailInfo

`func (o *ProfileEnrollmentTypeEmails) HasEmailInfo() bool`

HasEmailInfo returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *ProfileEnrollmentTypeEmails) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *ProfileEnrollmentTypeEmails) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *ProfileEnrollmentTypeEmails) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *ProfileEnrollmentTypeEmails) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileEnrollmentTypeEmails) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileEnrollmentTypeEmails) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileEnrollmentTypeEmails) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileEnrollmentTypeEmails) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


