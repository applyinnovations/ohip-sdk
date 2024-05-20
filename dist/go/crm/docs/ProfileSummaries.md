# ProfileSummaries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**ProfileSummaries** | Pointer to [**ProfileSummariesType**](ProfileSummariesType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileSummaries

`func NewProfileSummaries() *ProfileSummaries`

NewProfileSummaries instantiates a new ProfileSummaries object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileSummariesWithDefaults

`func NewProfileSummariesWithDefaults() *ProfileSummaries`

NewProfileSummariesWithDefaults instantiates a new ProfileSummaries object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ProfileSummaries) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileSummaries) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileSummaries) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileSummaries) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *ProfileSummaries) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *ProfileSummaries) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *ProfileSummaries) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *ProfileSummaries) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetProfileSummaries

`func (o *ProfileSummaries) GetProfileSummaries() ProfileSummariesType`

GetProfileSummaries returns the ProfileSummaries field if non-nil, zero value otherwise.

### GetProfileSummariesOk

`func (o *ProfileSummaries) GetProfileSummariesOk() (*ProfileSummariesType, bool)`

GetProfileSummariesOk returns a tuple with the ProfileSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileSummaries

`func (o *ProfileSummaries) SetProfileSummaries(v ProfileSummariesType)`

SetProfileSummaries sets ProfileSummaries field to given value.

### HasProfileSummaries

`func (o *ProfileSummaries) HasProfileSummaries() bool`

HasProfileSummaries returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileSummaries) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileSummaries) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileSummaries) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileSummaries) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


