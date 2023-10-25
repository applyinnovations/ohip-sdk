# ChangeTelephoneBookEntriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TelephoneBookEntries** | Pointer to [**[]TelephoneBookEntryType**](TelephoneBookEntryType.md) | This type holds collection of Telephone Book Entries with complete information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTelephoneBookEntriesRequest

`func NewChangeTelephoneBookEntriesRequest() *ChangeTelephoneBookEntriesRequest`

NewChangeTelephoneBookEntriesRequest instantiates a new ChangeTelephoneBookEntriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTelephoneBookEntriesRequestWithDefaults

`func NewChangeTelephoneBookEntriesRequestWithDefaults() *ChangeTelephoneBookEntriesRequest`

NewChangeTelephoneBookEntriesRequestWithDefaults instantiates a new ChangeTelephoneBookEntriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTelephoneBookEntriesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTelephoneBookEntriesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTelephoneBookEntriesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTelephoneBookEntriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTelephoneBookEntries

`func (o *ChangeTelephoneBookEntriesRequest) GetTelephoneBookEntries() []TelephoneBookEntryType`

GetTelephoneBookEntries returns the TelephoneBookEntries field if non-nil, zero value otherwise.

### GetTelephoneBookEntriesOk

`func (o *ChangeTelephoneBookEntriesRequest) GetTelephoneBookEntriesOk() (*[]TelephoneBookEntryType, bool)`

GetTelephoneBookEntriesOk returns a tuple with the TelephoneBookEntries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneBookEntries

`func (o *ChangeTelephoneBookEntriesRequest) SetTelephoneBookEntries(v []TelephoneBookEntryType)`

SetTelephoneBookEntries sets TelephoneBookEntries field to given value.

### HasTelephoneBookEntries

`func (o *ChangeTelephoneBookEntriesRequest) HasTelephoneBookEntries() bool`

HasTelephoneBookEntries returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTelephoneBookEntriesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTelephoneBookEntriesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTelephoneBookEntriesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTelephoneBookEntriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


