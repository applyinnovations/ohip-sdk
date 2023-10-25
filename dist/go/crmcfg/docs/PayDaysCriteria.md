# PayDaysCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PayDays** | Pointer to [**[]PayDayType**](PayDayType.md) | List of Pay Days. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPayDaysCriteria

`func NewPayDaysCriteria() *PayDaysCriteria`

NewPayDaysCriteria instantiates a new PayDaysCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayDaysCriteriaWithDefaults

`func NewPayDaysCriteriaWithDefaults() *PayDaysCriteria`

NewPayDaysCriteriaWithDefaults instantiates a new PayDaysCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PayDaysCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PayDaysCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PayDaysCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PayDaysCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPayDays

`func (o *PayDaysCriteria) GetPayDays() []PayDayType`

GetPayDays returns the PayDays field if non-nil, zero value otherwise.

### GetPayDaysOk

`func (o *PayDaysCriteria) GetPayDaysOk() (*[]PayDayType, bool)`

GetPayDaysOk returns a tuple with the PayDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayDays

`func (o *PayDaysCriteria) SetPayDays(v []PayDayType)`

SetPayDays sets PayDays field to given value.

### HasPayDays

`func (o *PayDaysCriteria) HasPayDays() bool`

HasPayDays returns a boolean if a field has been set.

### GetWarnings

`func (o *PayDaysCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PayDaysCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PayDaysCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PayDaysCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


