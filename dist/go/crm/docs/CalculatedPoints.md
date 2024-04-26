# CalculatedPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculatedPoint** | Pointer to [**CalculatedPointsType**](CalculatedPointsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCalculatedPoints

`func NewCalculatedPoints() *CalculatedPoints`

NewCalculatedPoints instantiates a new CalculatedPoints object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalculatedPointsWithDefaults

`func NewCalculatedPointsWithDefaults() *CalculatedPoints`

NewCalculatedPointsWithDefaults instantiates a new CalculatedPoints object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalculatedPoint

`func (o *CalculatedPoints) GetCalculatedPoint() CalculatedPointsType`

GetCalculatedPoint returns the CalculatedPoint field if non-nil, zero value otherwise.

### GetCalculatedPointOk

`func (o *CalculatedPoints) GetCalculatedPointOk() (*CalculatedPointsType, bool)`

GetCalculatedPointOk returns a tuple with the CalculatedPoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedPoint

`func (o *CalculatedPoints) SetCalculatedPoint(v CalculatedPointsType)`

SetCalculatedPoint sets CalculatedPoint field to given value.

### HasCalculatedPoint

`func (o *CalculatedPoints) HasCalculatedPoint() bool`

HasCalculatedPoint returns a boolean if a field has been set.

### GetLinks

`func (o *CalculatedPoints) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CalculatedPoints) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CalculatedPoints) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CalculatedPoints) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CalculatedPoints) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CalculatedPoints) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CalculatedPoints) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CalculatedPoints) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


