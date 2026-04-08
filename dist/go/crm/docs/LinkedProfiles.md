# LinkedProfiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileSummaries** | Pointer to [**ProfileSummariesType**](ProfileSummariesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLinkedProfiles

`func NewLinkedProfiles() *LinkedProfiles`

NewLinkedProfiles instantiates a new LinkedProfiles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedProfilesWithDefaults

`func NewLinkedProfilesWithDefaults() *LinkedProfiles`

NewLinkedProfilesWithDefaults instantiates a new LinkedProfiles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileSummaries

`func (o *LinkedProfiles) GetProfileSummaries() ProfileSummariesType`

GetProfileSummaries returns the ProfileSummaries field if non-nil, zero value otherwise.

### GetProfileSummariesOk

`func (o *LinkedProfiles) GetProfileSummariesOk() (*ProfileSummariesType, bool)`

GetProfileSummariesOk returns a tuple with the ProfileSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileSummaries

`func (o *LinkedProfiles) SetProfileSummaries(v ProfileSummariesType)`

SetProfileSummaries sets ProfileSummaries field to given value.

### HasProfileSummaries

`func (o *LinkedProfiles) HasProfileSummaries() bool`

HasProfileSummaries returns a boolean if a field has been set.

### GetLinks

`func (o *LinkedProfiles) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LinkedProfiles) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LinkedProfiles) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LinkedProfiles) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *LinkedProfiles) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LinkedProfiles) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LinkedProfiles) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LinkedProfiles) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


