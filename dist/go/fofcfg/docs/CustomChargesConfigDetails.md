# CustomChargesConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomCharges** | Pointer to [**[]CustomChargeType**](CustomChargeType.md) | Details for Custom Charges Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCustomChargesConfigDetails

`func NewCustomChargesConfigDetails() *CustomChargesConfigDetails`

NewCustomChargesConfigDetails instantiates a new CustomChargesConfigDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargesConfigDetailsWithDefaults

`func NewCustomChargesConfigDetailsWithDefaults() *CustomChargesConfigDetails`

NewCustomChargesConfigDetailsWithDefaults instantiates a new CustomChargesConfigDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomCharges

`func (o *CustomChargesConfigDetails) GetCustomCharges() []CustomChargeType`

GetCustomCharges returns the CustomCharges field if non-nil, zero value otherwise.

### GetCustomChargesOk

`func (o *CustomChargesConfigDetails) GetCustomChargesOk() (*[]CustomChargeType, bool)`

GetCustomChargesOk returns a tuple with the CustomCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCharges

`func (o *CustomChargesConfigDetails) SetCustomCharges(v []CustomChargeType)`

SetCustomCharges sets CustomCharges field to given value.

### HasCustomCharges

`func (o *CustomChargesConfigDetails) HasCustomCharges() bool`

HasCustomCharges returns a boolean if a field has been set.

### GetLinks

`func (o *CustomChargesConfigDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CustomChargesConfigDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CustomChargesConfigDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CustomChargesConfigDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CustomChargesConfigDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CustomChargesConfigDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CustomChargesConfigDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CustomChargesConfigDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


