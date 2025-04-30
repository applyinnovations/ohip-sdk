# ProfileTypeEmails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailInfo** | Pointer to [**[]EmailInfoType**](EmailInfoType.md) | Collection of Detailed information on an eMail address for the customer. | [optional] 

## Methods

### NewProfileTypeEmails

`func NewProfileTypeEmails() *ProfileTypeEmails`

NewProfileTypeEmails instantiates a new ProfileTypeEmails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeEmailsWithDefaults

`func NewProfileTypeEmailsWithDefaults() *ProfileTypeEmails`

NewProfileTypeEmailsWithDefaults instantiates a new ProfileTypeEmails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailInfo

`func (o *ProfileTypeEmails) GetEmailInfo() []EmailInfoType`

GetEmailInfo returns the EmailInfo field if non-nil, zero value otherwise.

### GetEmailInfoOk

`func (o *ProfileTypeEmails) GetEmailInfoOk() (*[]EmailInfoType, bool)`

GetEmailInfoOk returns a tuple with the EmailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailInfo

`func (o *ProfileTypeEmails) SetEmailInfo(v []EmailInfoType)`

SetEmailInfo sets EmailInfo field to given value.

### HasEmailInfo

`func (o *ProfileTypeEmails) HasEmailInfo() bool`

HasEmailInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


