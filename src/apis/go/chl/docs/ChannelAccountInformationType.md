# ChannelAccountInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountDetails** | Pointer to [**ChannelAccountDetailsType**](ChannelAccountDetailsType.md) |  | [optional] 
**AccountSetupDetails** | Pointer to [**ChannelAccountSetupDetailsType**](ChannelAccountSetupDetailsType.md) |  | [optional] 
**ContactInformation** | Pointer to [**ChannelAccountContactType**](ChannelAccountContactType.md) |  | [optional] 
**ChannelAccountNotes** | Pointer to [**ChannelAccountNotesType**](ChannelAccountNotesType.md) |  | [optional] 
**CommunicationDetails** | Pointer to [**ChannelAccountCommunicationType**](ChannelAccountCommunicationType.md) |  | [optional] 
**ContractInformation** | Pointer to [**[]ChannelAccountContractInformationType**](ChannelAccountContractInformationType.md) | Channel account contract information object to hold details of channel account contract. | [optional] 
**ChannelAccountIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 

## Methods

### NewChannelAccountInformationType

`func NewChannelAccountInformationType() *ChannelAccountInformationType`

NewChannelAccountInformationType instantiates a new ChannelAccountInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountInformationTypeWithDefaults

`func NewChannelAccountInformationTypeWithDefaults() *ChannelAccountInformationType`

NewChannelAccountInformationTypeWithDefaults instantiates a new ChannelAccountInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountDetails

`func (o *ChannelAccountInformationType) GetAccountDetails() ChannelAccountDetailsType`

GetAccountDetails returns the AccountDetails field if non-nil, zero value otherwise.

### GetAccountDetailsOk

`func (o *ChannelAccountInformationType) GetAccountDetailsOk() (*ChannelAccountDetailsType, bool)`

GetAccountDetailsOk returns a tuple with the AccountDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDetails

`func (o *ChannelAccountInformationType) SetAccountDetails(v ChannelAccountDetailsType)`

SetAccountDetails sets AccountDetails field to given value.

### HasAccountDetails

`func (o *ChannelAccountInformationType) HasAccountDetails() bool`

HasAccountDetails returns a boolean if a field has been set.

### GetAccountSetupDetails

`func (o *ChannelAccountInformationType) GetAccountSetupDetails() ChannelAccountSetupDetailsType`

GetAccountSetupDetails returns the AccountSetupDetails field if non-nil, zero value otherwise.

### GetAccountSetupDetailsOk

`func (o *ChannelAccountInformationType) GetAccountSetupDetailsOk() (*ChannelAccountSetupDetailsType, bool)`

GetAccountSetupDetailsOk returns a tuple with the AccountSetupDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSetupDetails

`func (o *ChannelAccountInformationType) SetAccountSetupDetails(v ChannelAccountSetupDetailsType)`

SetAccountSetupDetails sets AccountSetupDetails field to given value.

### HasAccountSetupDetails

`func (o *ChannelAccountInformationType) HasAccountSetupDetails() bool`

HasAccountSetupDetails returns a boolean if a field has been set.

### GetContactInformation

`func (o *ChannelAccountInformationType) GetContactInformation() ChannelAccountContactType`

GetContactInformation returns the ContactInformation field if non-nil, zero value otherwise.

### GetContactInformationOk

`func (o *ChannelAccountInformationType) GetContactInformationOk() (*ChannelAccountContactType, bool)`

GetContactInformationOk returns a tuple with the ContactInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactInformation

`func (o *ChannelAccountInformationType) SetContactInformation(v ChannelAccountContactType)`

SetContactInformation sets ContactInformation field to given value.

### HasContactInformation

`func (o *ChannelAccountInformationType) HasContactInformation() bool`

HasContactInformation returns a boolean if a field has been set.

### GetChannelAccountNotes

`func (o *ChannelAccountInformationType) GetChannelAccountNotes() ChannelAccountNotesType`

GetChannelAccountNotes returns the ChannelAccountNotes field if non-nil, zero value otherwise.

### GetChannelAccountNotesOk

`func (o *ChannelAccountInformationType) GetChannelAccountNotesOk() (*ChannelAccountNotesType, bool)`

GetChannelAccountNotesOk returns a tuple with the ChannelAccountNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountNotes

`func (o *ChannelAccountInformationType) SetChannelAccountNotes(v ChannelAccountNotesType)`

SetChannelAccountNotes sets ChannelAccountNotes field to given value.

### HasChannelAccountNotes

`func (o *ChannelAccountInformationType) HasChannelAccountNotes() bool`

HasChannelAccountNotes returns a boolean if a field has been set.

### GetCommunicationDetails

`func (o *ChannelAccountInformationType) GetCommunicationDetails() ChannelAccountCommunicationType`

GetCommunicationDetails returns the CommunicationDetails field if non-nil, zero value otherwise.

### GetCommunicationDetailsOk

`func (o *ChannelAccountInformationType) GetCommunicationDetailsOk() (*ChannelAccountCommunicationType, bool)`

GetCommunicationDetailsOk returns a tuple with the CommunicationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationDetails

`func (o *ChannelAccountInformationType) SetCommunicationDetails(v ChannelAccountCommunicationType)`

SetCommunicationDetails sets CommunicationDetails field to given value.

### HasCommunicationDetails

`func (o *ChannelAccountInformationType) HasCommunicationDetails() bool`

HasCommunicationDetails returns a boolean if a field has been set.

### GetContractInformation

`func (o *ChannelAccountInformationType) GetContractInformation() []ChannelAccountContractInformationType`

GetContractInformation returns the ContractInformation field if non-nil, zero value otherwise.

### GetContractInformationOk

`func (o *ChannelAccountInformationType) GetContractInformationOk() (*[]ChannelAccountContractInformationType, bool)`

GetContractInformationOk returns a tuple with the ContractInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractInformation

`func (o *ChannelAccountInformationType) SetContractInformation(v []ChannelAccountContractInformationType)`

SetContractInformation sets ContractInformation field to given value.

### HasContractInformation

`func (o *ChannelAccountInformationType) HasContractInformation() bool`

HasContractInformation returns a boolean if a field has been set.

### GetChannelAccountIndicators

`func (o *ChannelAccountInformationType) GetChannelAccountIndicators() []IndicatorType`

GetChannelAccountIndicators returns the ChannelAccountIndicators field if non-nil, zero value otherwise.

### GetChannelAccountIndicatorsOk

`func (o *ChannelAccountInformationType) GetChannelAccountIndicatorsOk() (*[]IndicatorType, bool)`

GetChannelAccountIndicatorsOk returns a tuple with the ChannelAccountIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountIndicators

`func (o *ChannelAccountInformationType) SetChannelAccountIndicators(v []IndicatorType)`

SetChannelAccountIndicators sets ChannelAccountIndicators field to given value.

### HasChannelAccountIndicators

`func (o *ChannelAccountInformationType) HasChannelAccountIndicators() bool`

HasChannelAccountIndicators returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


