# ProfileYearView

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARProfileYearView** | Pointer to [**ARProfileYearViewInfoType**](ARProfileYearViewInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileYearView

`func NewProfileYearView() *ProfileYearView`

NewProfileYearView instantiates a new ProfileYearView object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileYearViewWithDefaults

`func NewProfileYearViewWithDefaults() *ProfileYearView`

NewProfileYearViewWithDefaults instantiates a new ProfileYearView object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARProfileYearView

`func (o *ProfileYearView) GetARProfileYearView() ARProfileYearViewInfoType`

GetARProfileYearView returns the ARProfileYearView field if non-nil, zero value otherwise.

### GetARProfileYearViewOk

`func (o *ProfileYearView) GetARProfileYearViewOk() (*ARProfileYearViewInfoType, bool)`

GetARProfileYearViewOk returns a tuple with the ARProfileYearView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARProfileYearView

`func (o *ProfileYearView) SetARProfileYearView(v ARProfileYearViewInfoType)`

SetARProfileYearView sets ARProfileYearView field to given value.

### HasARProfileYearView

`func (o *ProfileYearView) HasARProfileYearView() bool`

HasARProfileYearView returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileYearView) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileYearView) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileYearView) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileYearView) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileYearView) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileYearView) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileYearView) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileYearView) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


