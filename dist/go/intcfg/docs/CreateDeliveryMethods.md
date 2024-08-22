# CreateDeliveryMethods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeliveryMethods** | Pointer to [**ConfiguredExternalDeliveryMethodsType**](ConfiguredExternalDeliveryMethodsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateDeliveryMethods

`func NewCreateDeliveryMethods() *CreateDeliveryMethods`

NewCreateDeliveryMethods instantiates a new CreateDeliveryMethods object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateDeliveryMethodsWithDefaults

`func NewCreateDeliveryMethodsWithDefaults() *CreateDeliveryMethods`

NewCreateDeliveryMethodsWithDefaults instantiates a new CreateDeliveryMethods object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeliveryMethods

`func (o *CreateDeliveryMethods) GetDeliveryMethods() ConfiguredExternalDeliveryMethodsType`

GetDeliveryMethods returns the DeliveryMethods field if non-nil, zero value otherwise.

### GetDeliveryMethodsOk

`func (o *CreateDeliveryMethods) GetDeliveryMethodsOk() (*ConfiguredExternalDeliveryMethodsType, bool)`

GetDeliveryMethodsOk returns a tuple with the DeliveryMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryMethods

`func (o *CreateDeliveryMethods) SetDeliveryMethods(v ConfiguredExternalDeliveryMethodsType)`

SetDeliveryMethods sets DeliveryMethods field to given value.

### HasDeliveryMethods

`func (o *CreateDeliveryMethods) HasDeliveryMethods() bool`

HasDeliveryMethods returns a boolean if a field has been set.

### GetLinks

`func (o *CreateDeliveryMethods) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateDeliveryMethods) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateDeliveryMethods) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateDeliveryMethods) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateDeliveryMethods) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateDeliveryMethods) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateDeliveryMethods) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateDeliveryMethods) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


