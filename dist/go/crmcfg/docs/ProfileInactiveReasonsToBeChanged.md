# ProfileInactiveReasonsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileInactiveReasons** | Pointer to [**[]ProfileInactiveReasonType**](ProfileInactiveReasonType.md) | List of Profile Inactive Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileInactiveReasonsToBeChanged

`func NewProfileInactiveReasonsToBeChanged() *ProfileInactiveReasonsToBeChanged`

NewProfileInactiveReasonsToBeChanged instantiates a new ProfileInactiveReasonsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileInactiveReasonsToBeChangedWithDefaults

`func NewProfileInactiveReasonsToBeChangedWithDefaults() *ProfileInactiveReasonsToBeChanged`

NewProfileInactiveReasonsToBeChangedWithDefaults instantiates a new ProfileInactiveReasonsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileInactiveReasons

`func (o *ProfileInactiveReasonsToBeChanged) GetProfileInactiveReasons() []ProfileInactiveReasonType`

GetProfileInactiveReasons returns the ProfileInactiveReasons field if non-nil, zero value otherwise.

### GetProfileInactiveReasonsOk

`func (o *ProfileInactiveReasonsToBeChanged) GetProfileInactiveReasonsOk() (*[]ProfileInactiveReasonType, bool)`

GetProfileInactiveReasonsOk returns a tuple with the ProfileInactiveReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileInactiveReasons

`func (o *ProfileInactiveReasonsToBeChanged) SetProfileInactiveReasons(v []ProfileInactiveReasonType)`

SetProfileInactiveReasons sets ProfileInactiveReasons field to given value.

### HasProfileInactiveReasons

`func (o *ProfileInactiveReasonsToBeChanged) HasProfileInactiveReasons() bool`

HasProfileInactiveReasons returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileInactiveReasonsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileInactiveReasonsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileInactiveReasonsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileInactiveReasonsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileInactiveReasonsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileInactiveReasonsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileInactiveReasonsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileInactiveReasonsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

