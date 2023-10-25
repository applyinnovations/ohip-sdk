# TelephoneBookEntriesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TelephoneBookEntries** | Pointer to [**[]TelephoneBookEntryType**](TelephoneBookEntryType.md) | This type holds collection of Telephone Book Entries with complete information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTelephoneBookEntriesCriteria

`func NewTelephoneBookEntriesCriteria() *TelephoneBookEntriesCriteria`

NewTelephoneBookEntriesCriteria instantiates a new TelephoneBookEntriesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTelephoneBookEntriesCriteriaWithDefaults

`func NewTelephoneBookEntriesCriteriaWithDefaults() *TelephoneBookEntriesCriteria`

NewTelephoneBookEntriesCriteriaWithDefaults instantiates a new TelephoneBookEntriesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TelephoneBookEntriesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TelephoneBookEntriesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TelephoneBookEntriesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TelephoneBookEntriesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTelephoneBookEntries

`func (o *TelephoneBookEntriesCriteria) GetTelephoneBookEntries() []TelephoneBookEntryType`

GetTelephoneBookEntries returns the TelephoneBookEntries field if non-nil, zero value otherwise.

### GetTelephoneBookEntriesOk

`func (o *TelephoneBookEntriesCriteria) GetTelephoneBookEntriesOk() (*[]TelephoneBookEntryType, bool)`

GetTelephoneBookEntriesOk returns a tuple with the TelephoneBookEntries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneBookEntries

`func (o *TelephoneBookEntriesCriteria) SetTelephoneBookEntries(v []TelephoneBookEntryType)`

SetTelephoneBookEntries sets TelephoneBookEntries field to given value.

### HasTelephoneBookEntries

`func (o *TelephoneBookEntriesCriteria) HasTelephoneBookEntries() bool`

HasTelephoneBookEntries returns a boolean if a field has been set.

### GetWarnings

`func (o *TelephoneBookEntriesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TelephoneBookEntriesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TelephoneBookEntriesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TelephoneBookEntriesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


