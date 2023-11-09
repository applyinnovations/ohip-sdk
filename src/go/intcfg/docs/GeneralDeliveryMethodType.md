# GeneralDeliveryMethodType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to [**EmailDeliveryConfigurationType**](EmailDeliveryConfigurationType.md) |  | [optional] 
**Fax** | Pointer to [**FaxDeliveryConfigurationType**](FaxDeliveryConfigurationType.md) |  | [optional] 
**SftpConfigurations** | Pointer to [**SftpConfigurationsListType**](SftpConfigurationsListType.md) |  | [optional] 

## Methods

### NewGeneralDeliveryMethodType

`func NewGeneralDeliveryMethodType() *GeneralDeliveryMethodType`

NewGeneralDeliveryMethodType instantiates a new GeneralDeliveryMethodType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneralDeliveryMethodTypeWithDefaults

`func NewGeneralDeliveryMethodTypeWithDefaults() *GeneralDeliveryMethodType`

NewGeneralDeliveryMethodTypeWithDefaults instantiates a new GeneralDeliveryMethodType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *GeneralDeliveryMethodType) GetEmail() EmailDeliveryConfigurationType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *GeneralDeliveryMethodType) GetEmailOk() (*EmailDeliveryConfigurationType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *GeneralDeliveryMethodType) SetEmail(v EmailDeliveryConfigurationType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *GeneralDeliveryMethodType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetFax

`func (o *GeneralDeliveryMethodType) GetFax() FaxDeliveryConfigurationType`

GetFax returns the Fax field if non-nil, zero value otherwise.

### GetFaxOk

`func (o *GeneralDeliveryMethodType) GetFaxOk() (*FaxDeliveryConfigurationType, bool)`

GetFaxOk returns a tuple with the Fax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFax

`func (o *GeneralDeliveryMethodType) SetFax(v FaxDeliveryConfigurationType)`

SetFax sets Fax field to given value.

### HasFax

`func (o *GeneralDeliveryMethodType) HasFax() bool`

HasFax returns a boolean if a field has been set.

### GetSftpConfigurations

`func (o *GeneralDeliveryMethodType) GetSftpConfigurations() SftpConfigurationsListType`

GetSftpConfigurations returns the SftpConfigurations field if non-nil, zero value otherwise.

### GetSftpConfigurationsOk

`func (o *GeneralDeliveryMethodType) GetSftpConfigurationsOk() (*SftpConfigurationsListType, bool)`

GetSftpConfigurationsOk returns a tuple with the SftpConfigurations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSftpConfigurations

`func (o *GeneralDeliveryMethodType) SetSftpConfigurations(v SftpConfigurationsListType)`

SetSftpConfigurations sets SftpConfigurations field to given value.

### HasSftpConfigurations

`func (o *GeneralDeliveryMethodType) HasSftpConfigurations() bool`

HasSftpConfigurations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


