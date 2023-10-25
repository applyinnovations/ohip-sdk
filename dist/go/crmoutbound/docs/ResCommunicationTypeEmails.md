# ResCommunicationTypeEmails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailInfo** | Pointer to [**[]EmailInfoType**](EmailInfoType.md) | Collection of Detailed information on an eMail address for the customer. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewResCommunicationTypeEmails

`func NewResCommunicationTypeEmails() *ResCommunicationTypeEmails`

NewResCommunicationTypeEmails instantiates a new ResCommunicationTypeEmails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResCommunicationTypeEmailsWithDefaults

`func NewResCommunicationTypeEmailsWithDefaults() *ResCommunicationTypeEmails`

NewResCommunicationTypeEmailsWithDefaults instantiates a new ResCommunicationTypeEmails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailInfo

`func (o *ResCommunicationTypeEmails) GetEmailInfo() []EmailInfoType`

GetEmailInfo returns the EmailInfo field if non-nil, zero value otherwise.

### GetEmailInfoOk

`func (o *ResCommunicationTypeEmails) GetEmailInfoOk() (*[]EmailInfoType, bool)`

GetEmailInfoOk returns a tuple with the EmailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailInfo

`func (o *ResCommunicationTypeEmails) SetEmailInfo(v []EmailInfoType)`

SetEmailInfo sets EmailInfo field to given value.

### HasEmailInfo

`func (o *ResCommunicationTypeEmails) HasEmailInfo() bool`

HasEmailInfo returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *ResCommunicationTypeEmails) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *ResCommunicationTypeEmails) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *ResCommunicationTypeEmails) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *ResCommunicationTypeEmails) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *ResCommunicationTypeEmails) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ResCommunicationTypeEmails) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ResCommunicationTypeEmails) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ResCommunicationTypeEmails) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


