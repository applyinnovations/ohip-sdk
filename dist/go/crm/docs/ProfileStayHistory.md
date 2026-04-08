# ProfileStayHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileStayDetails** | Pointer to [**ProfileStayDetailsType**](ProfileStayDetailsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileStayHistory

`func NewProfileStayHistory() *ProfileStayHistory`

NewProfileStayHistory instantiates a new ProfileStayHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileStayHistoryWithDefaults

`func NewProfileStayHistoryWithDefaults() *ProfileStayHistory`

NewProfileStayHistoryWithDefaults instantiates a new ProfileStayHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileStayDetails

`func (o *ProfileStayHistory) GetProfileStayDetails() ProfileStayDetailsType`

GetProfileStayDetails returns the ProfileStayDetails field if non-nil, zero value otherwise.

### GetProfileStayDetailsOk

`func (o *ProfileStayHistory) GetProfileStayDetailsOk() (*ProfileStayDetailsType, bool)`

GetProfileStayDetailsOk returns a tuple with the ProfileStayDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileStayDetails

`func (o *ProfileStayHistory) SetProfileStayDetails(v ProfileStayDetailsType)`

SetProfileStayDetails sets ProfileStayDetails field to given value.

### HasProfileStayDetails

`func (o *ProfileStayHistory) HasProfileStayDetails() bool`

HasProfileStayDetails returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileStayHistory) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileStayHistory) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileStayHistory) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileStayHistory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileStayHistory) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileStayHistory) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileStayHistory) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileStayHistory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


